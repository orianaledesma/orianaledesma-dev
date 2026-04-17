import {
  ChangeDetectionStrategy,
  Component,
  computed,
  inject,
  input,
  signal,
} from '@angular/core';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { toSignal } from '@angular/core/rxjs-interop';
import { HeroVariant } from '../hero/hero.component';
import { ContactService } from '../../services/contact.service';
import { ContactFormData } from '../../models/contact.model';

interface SocialLink { label: string; href: string; icon: string; }

const SOCIAL_LINKS: SocialLink[] = [
  { label: 'LinkedIn',  href: 'https://linkedin.com/in/orianaledesma',  icon: 'in' },
  { label: 'GitHub',    href: 'https://github.com/orianaledesma',       icon: 'gh' },
  { label: 'Instagram', href: 'https://instagram.com/exploriando',      icon: 'ig' },
  { label: 'Email',     href: 'mailto:hola@exploriando.page',           icon: '@'  },
];

const RATE_LIMIT_KEY     = 'contact_submissions';
const RATE_LIMIT_MAX     = 3;
const RATE_LIMIT_WINDOW  = 10 * 60 * 1000;

export type SubmitStatus = 'idle' | 'success' | 'error' | 'rateLimit';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [ReactiveFormsModule],
})
export class ContactComponent {
  variant = input<HeroVariant>('technical');

  readonly socialLinks = SOCIAL_LINKS;
  readonly calendlyUrl = 'https://calendly.com/exploriando-1/asesoria-personalizada-clone';

  private readonly fb             = inject(FormBuilder);
  private readonly contactService = inject(ContactService);

  contactForm = this.fb.group({
    name:    ['', [Validators.required, Validators.minLength(2), Validators.maxLength(50)]],
    email:   ['', [Validators.required, Validators.email]],
    message: ['', [Validators.required, Validators.minLength(10), Validators.maxLength(500)]],
    website: [''],  // honeypot — must stay empty
  });

  private readonly formStatus = toSignal(
    this.contactForm.statusChanges,
    { initialValue: this.contactForm.status },
  );

  private readonly messageValue = toSignal(
    this.contactForm.controls.message.valueChanges,
    { initialValue: '' },
  );

  formValid    = computed(() => this.formStatus() === 'VALID');
  messageLen   = computed(() => (this.messageValue() ?? '').length);
  sending      = signal(false);
  submitStatus = signal<SubmitStatus>('idle');

  get nameCtrl()    { return this.contactForm.controls.name;    }
  get emailCtrl()   { return this.contactForm.controls.email;   }
  get messageCtrl() { return this.contactForm.controls.message; }

  onSubmit(): void {
    // Honeypot check — silent success to confuse bots
    if (this.contactForm.value.website) {
      this.submitStatus.set('success');
      return;
    }

    if (!this.formValid()) {
      this.contactForm.markAllAsTouched();
      return;
    }

    if (this.isRateLimited()) {
      this.submitStatus.set('rateLimit');
      return;
    }

    this.sending.set(true);
    this.submitStatus.set('idle');

    const { name, email, message } = this.contactForm.value as ContactFormData;

    this.contactService.sendMessage({ name, email, message }).subscribe({
      next: () => {
        this.submitStatus.set('success');
        this.recordSubmission();
        this.contactForm.reset();
        this.sending.set(false);
      },
      error: () => {
        this.submitStatus.set('error');
        this.sending.set(false);
      },
    });
  }

  isRateLimited(): boolean {
    const stored = localStorage.getItem(RATE_LIMIT_KEY);
    const timestamps: number[] = stored ? (JSON.parse(stored) as number[]) : [];
    const now = Date.now();
    const recent = timestamps.filter(t => now - t < RATE_LIMIT_WINDOW);
    return recent.length >= RATE_LIMIT_MAX;
  }

  private recordSubmission(): void {
    const stored = localStorage.getItem(RATE_LIMIT_KEY);
    const timestamps: number[] = stored ? (JSON.parse(stored) as number[]) : [];
    const now = Date.now();
    const recent = timestamps.filter(t => now - t < RATE_LIMIT_WINDOW);
    recent.push(now);
    localStorage.setItem(RATE_LIMIT_KEY, JSON.stringify(recent));
  }
}
