import {
  ChangeDetectionStrategy,
  Component,
  PLATFORM_ID,
  computed,
  inject,
  signal,
} from '@angular/core';
import { isPlatformBrowser } from '@angular/common';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { LanguageService } from '../../services/language.service';
import { AnalyticsService } from '../../services/analytics.service';
import { ContactService } from '../../services/contact.service';
import { TRANSLATIONS } from '../../translations/translations';

export type LeadMagnetStatus = 'idle' | 'sending' | 'success' | 'error' | 'rateLimit';

const RATE_LIMIT_KEY = 'lead_magnet_submissions';
const RATE_LIMIT_MAX = 3;
const RATE_LIMIT_WINDOW = 10 * 60 * 1000;

@Component({
  selector: 'app-lead-magnet',
  templateUrl: './lead-magnet.component.html',
  styleUrl: './lead-magnet.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [ReactiveFormsModule],
})
export class LeadMagnetComponent {
  private readonly isBrowser = isPlatformBrowser(inject(PLATFORM_ID));
  private readonly fb = inject(FormBuilder);
  private readonly lang = inject(LanguageService);
  private readonly analytics = inject(AnalyticsService);
  private readonly contactService = inject(ContactService);

  readonly t = computed(() => TRANSLATIONS[this.lang.current()].leadMagnet);

  readonly status = signal<LeadMagnetStatus>('idle');

  readonly form = this.fb.group({
    email: ['', [Validators.required, Validators.email]],
    website: [''], // honeypot — must stay empty
  });

  get emailCtrl() {
    return this.form.controls.email;
  }

  /** Envía el pedido del "free online presence check" vía EmailJS (mismo canal que contacto). */
  onSubmit(): void {
    // Honeypot — silent success to confuse bots
    if (this.form.value.website) {
      this.status.set('success');
      return;
    }

    if (this.form.invalid) {
      this.form.markAllAsTouched();
      return;
    }

    if (this.isRateLimited()) {
      this.status.set('rateLimit');
      return;
    }

    this.status.set('sending');
    const email = this.form.value.email as string;

    this.contactService
      .sendMessage({
        name: 'Lead magnet — free online presence check',
        email,
        message: 'Requested the free online presence check via the lead magnet form.',
      })
      .subscribe({
        next: () => {
          this.status.set('success');
          this.recordSubmission();
          this.form.reset();
          this.analytics.track('lead_magnet_submit');
        },
        error: () => this.status.set('error'),
      });
  }

  private isRateLimited(): boolean {
    if (!this.isBrowser) return false;
    const recent = this.recentSubmissions();
    return recent.length >= RATE_LIMIT_MAX;
  }

  private recordSubmission(): void {
    if (!this.isBrowser) return;
    const recent = this.recentSubmissions();
    recent.push(Date.now());
    try {
      localStorage.setItem(RATE_LIMIT_KEY, JSON.stringify(recent));
    } catch {
      /* noop */
    }
  }

  private recentSubmissions(): number[] {
    try {
      const stored = localStorage.getItem(RATE_LIMIT_KEY);
      const timestamps: number[] = stored ? (JSON.parse(stored) as number[]) : [];
      const now = Date.now();
      return timestamps.filter((ts) => now - ts < RATE_LIMIT_WINDOW);
    } catch {
      return [];
    }
  }
}
