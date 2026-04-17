import { ComponentFixture, TestBed, fakeAsync, tick } from '@angular/core/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { of, throwError } from 'rxjs';
import { ContactComponent } from './contact.component';
import { ContactService } from '../../services/contact.service';

const VALID_FORM = {
  name:    'Test User',
  email:   'test@example.com',
  message: 'This is a message that is long enough to pass validation.',
  website: '',
};

describe('ContactComponent', () => {
  let component: ContactComponent;
  let fixture:   ComponentFixture<ContactComponent>;
  let mockContactService: jasmine.SpyObj<ContactService>;

  beforeEach(async () => {
    mockContactService = jasmine.createSpyObj<ContactService>('ContactService', ['sendMessage']);

    await TestBed.configureTestingModule({
      imports:   [ContactComponent, HttpClientTestingModule],
      providers: [{ provide: ContactService, useValue: mockContactService }],
    }).compileComponents();

    fixture   = TestBed.createComponent(ContactComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  afterEach(() => localStorage.clear());

  // ── Component creation ────────────────────────────────────────────────────

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  // ── Form validation ───────────────────────────────────────────────────────

  it('should start with an invalid form', () => {
    expect(component.contactForm.invalid).toBeTrue();
  });

  it('should show email error with incorrect format', () => {
    component.emailCtrl.setValue('not-an-email');
    component.emailCtrl.markAsTouched();
    fixture.detectChanges();

    const errorEl: HTMLElement = fixture.nativeElement.querySelector('[data-testid="email-error"]');
    expect(errorEl).toBeTruthy();
    expect(errorEl.textContent).toContain('valid email');
  });

  it('should show name error if fewer than 2 characters', () => {
    component.nameCtrl.setValue('a');
    component.nameCtrl.markAsTouched();
    fixture.detectChanges();

    const errorEl: HTMLElement = fixture.nativeElement.querySelector('[data-testid="name-error"]');
    expect(errorEl).toBeTruthy();
    expect(errorEl.textContent).toContain('2 characters');
  });

  it('should show message error if fewer than 10 characters', () => {
    component.messageCtrl.setValue('short');
    component.messageCtrl.markAsTouched();
    fixture.detectChanges();

    const errorEl: HTMLElement = fixture.nativeElement.querySelector('[data-testid="message-error"]');
    expect(errorEl).toBeTruthy();
    expect(errorEl.textContent).toContain('10 characters');
  });

  it('should not show errors on untouched invalid fields', () => {
    const nameError = fixture.nativeElement.querySelector('[data-testid="name-error"]');
    expect(nameError).toBeNull();
  });

  // ── Submit button state ───────────────────────────────────────────────────

  it('should have submit button enabled even when form is invalid', () => {
    const btn: HTMLButtonElement = fixture.nativeElement.querySelector('[data-testid="submit-button"]');
    expect(btn.disabled).toBeFalse();
  });

  it('should mark all controls as touched when submitting invalid form', () => {
    component.onSubmit();
    expect(component.nameCtrl.touched).toBeTrue();
    expect(component.emailCtrl.touched).toBeTrue();
    expect(component.messageCtrl.touched).toBeTrue();
  });

  it('should enable submit button when form is valid', fakeAsync(() => {
    mockContactService.sendMessage.and.returnValue(of(undefined));
    component.contactForm.setValue(VALID_FORM);
    tick();
    fixture.detectChanges();

    const btn: HTMLButtonElement = fixture.nativeElement.querySelector('[data-testid="submit-button"]');
    expect(btn.disabled).toBeFalse();
  }));

  // ── Submit success ────────────────────────────────────────────────────────

  it('should show success message on successful submit', fakeAsync(() => {
    mockContactService.sendMessage.and.returnValue(of(undefined));
    component.contactForm.setValue(VALID_FORM);
    tick();

    component.onSubmit();
    fixture.detectChanges();

    expect(component.submitStatus()).toBe('success');
    const successEl = fixture.nativeElement.querySelector('[data-testid="success-message"]');
    expect(successEl).toBeTruthy();
    expect(successEl.textContent).toContain('24h');
  }));

  it('should reset the form after successful submit', fakeAsync(() => {
    mockContactService.sendMessage.and.returnValue(of(undefined));
    component.contactForm.setValue(VALID_FORM);
    tick();

    component.onSubmit();

    expect(component.contactForm.value.name).toBeFalsy();
  }));

  // ── Submit error ──────────────────────────────────────────────────────────

  it('should show error message on failed submit', fakeAsync(() => {
    mockContactService.sendMessage.and.returnValue(throwError(() => new Error('Network error')));
    component.contactForm.setValue(VALID_FORM);
    tick();

    component.onSubmit();
    fixture.detectChanges();

    expect(component.submitStatus()).toBe('error');
    const errorEl = fixture.nativeElement.querySelector('[data-testid="error-message"]');
    expect(errorEl).toBeTruthy();
  }));

  it('should set sending to false after error', fakeAsync(() => {
    mockContactService.sendMessage.and.returnValue(throwError(() => new Error('error')));
    component.contactForm.setValue(VALID_FORM);
    tick();

    component.onSubmit();

    expect(component.sending()).toBeFalse();
  }));

  // ── Honeypot ──────────────────────────────────────────────────────────────

  it('should have honeypot field in the DOM', () => {
    const honeypotWrap = fixture.nativeElement.querySelector('.form-field--honeypot');
    const honeypotInput: HTMLInputElement = fixture.nativeElement.querySelector('[formControlName="website"]');

    expect(honeypotWrap).toBeTruthy();
    expect(honeypotInput).toBeTruthy();
    expect(honeypotInput.getAttribute('tabindex')).toBe('-1');
  });

  it('should not call service when honeypot is filled', fakeAsync(() => {
    component.contactForm.setValue({ ...VALID_FORM, website: 'spam-value' });
    tick();

    component.onSubmit();

    expect(mockContactService.sendMessage).not.toHaveBeenCalled();
    expect(component.submitStatus()).toBe('success');
  }));

  // ── Rate limiting ─────────────────────────────────────────────────────────

  it('should block submission after 3 attempts in rate limit window', fakeAsync(() => {
    mockContactService.sendMessage.and.returnValue(of(undefined));

    // 3 successful submissions
    for (let i = 0; i < 3; i++) {
      component.contactForm.setValue(VALID_FORM);
      tick();
      component.onSubmit();
    }

    // 4th attempt should be blocked
    component.contactForm.setValue(VALID_FORM);
    tick();
    component.onSubmit();
    fixture.detectChanges();

    expect(component.submitStatus()).toBe('rateLimit');
    expect(mockContactService.sendMessage).toHaveBeenCalledTimes(3);
  }));

  it('should allow submission after rate limit window expires', fakeAsync(() => {
    mockContactService.sendMessage.and.returnValue(of(undefined));

    // Fill localStorage with 3 old timestamps (outside the 10-min window)
    const oldTimestamp = Date.now() - 11 * 60 * 1000;
    localStorage.setItem('contact_submissions', JSON.stringify([oldTimestamp, oldTimestamp, oldTimestamp]));

    component.contactForm.setValue(VALID_FORM);
    tick();
    component.onSubmit();

    expect(mockContactService.sendMessage).toHaveBeenCalledTimes(1);
    expect(component.submitStatus()).toBe('success');
  }));
});
