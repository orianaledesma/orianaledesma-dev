import type { Mock, MockedObject } from "vitest";
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { of, throwError } from 'rxjs';
import { ContactComponent } from './contact.component';
import { ContactService } from '../../services/contact.service';
import { AnalyticsService } from '../../services/analytics.service';
import { ProjectInterestService } from '../../services/project-interest.service';

const VALID_FORM = {
    name: 'Test User',
    email: 'test@example.com',
    message: 'This is a message that is long enough to pass validation.',
    website: '',
};

describe('ContactComponent', () => {
    beforeEach(() => {
        vi.useFakeTimers({ advanceTimeDelta: 1, shouldAdvanceTime: true });
    });
    afterEach(() => {
        vi.useRealTimers();
    });
    let component: ContactComponent;
    let fixture: ComponentFixture<ContactComponent>;
    let mockContactService: MockedObject<ContactService>;
    let trackSpy: Mock;

    beforeEach(async () => {
        mockContactService = {
            sendMessage: vi.fn().mockName("ContactService.sendMessage")
        };

        await TestBed.configureTestingModule({
            imports: [ContactComponent, HttpClientTestingModule],
            providers: [{ provide: ContactService, useValue: mockContactService }],
        }).compileComponents();

        fixture = TestBed.createComponent(ContactComponent);
        component = fixture.componentInstance;
        trackSpy = vi.spyOn(TestBed.inject(AnalyticsService), 'track').mockReturnValue(undefined);
        fixture.detectChanges();
    });

    afterEach(() => localStorage.clear());

    // ── Component creation ────────────────────────────────────────────────────

    it('should create', () => {
        expect(component).toBeTruthy();
    });

    // ── Form validation ───────────────────────────────────────────────────────

    it('should start with an invalid form', () => {
        expect(component.contactForm.invalid).toBe(true);
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
        expect(btn.disabled).toBe(false);
    });

    it('should mark all controls as touched when submitting invalid form', () => {
        component.onSubmit();
        expect(component.nameCtrl.touched).toBe(true);
        expect(component.emailCtrl.touched).toBe(true);
        expect(component.messageCtrl.touched).toBe(true);
    });

    it('should enable submit button when form is valid', async () => {
        mockContactService.sendMessage.mockReturnValue(of(undefined));
        component.contactForm.setValue(VALID_FORM);
        await vi.advanceTimersByTimeAsync(0);
        fixture.detectChanges();

        const btn: HTMLButtonElement = fixture.nativeElement.querySelector('[data-testid="submit-button"]');
        expect(btn.disabled).toBe(false);
    });

    // ── Submit success ────────────────────────────────────────────────────────

    it('should show success message on successful submit', async () => {
        mockContactService.sendMessage.mockReturnValue(of(undefined));
        component.contactForm.setValue(VALID_FORM);
        await vi.advanceTimersByTimeAsync(0);

        component.onSubmit();
        fixture.detectChanges();

        expect(component.submitStatus()).toBe('success');
        const successEl = fixture.nativeElement.querySelector('[data-testid="success-message"]');
        expect(successEl).toBeTruthy();
        expect(successEl.textContent).toContain('24h');
    });

    it('should reset the form after successful submit', async () => {
        mockContactService.sendMessage.mockReturnValue(of(undefined));
        component.contactForm.setValue(VALID_FORM);
        await vi.advanceTimersByTimeAsync(0);

        component.onSubmit();

        expect(component.contactForm.value.name).toBeFalsy();
    });

    // ── Submit error ──────────────────────────────────────────────────────────

    it('should show error message on failed submit', async () => {
        mockContactService.sendMessage.mockReturnValue(throwError(() => new Error('Network error')));
        component.contactForm.setValue(VALID_FORM);
        await vi.advanceTimersByTimeAsync(0);

        component.onSubmit();
        fixture.detectChanges();

        expect(component.submitStatus()).toBe('error');
        const errorEl = fixture.nativeElement.querySelector('[data-testid="error-message"]');
        expect(errorEl).toBeTruthy();
    });

    it('should set sending to false after error', async () => {
        mockContactService.sendMessage.mockReturnValue(throwError(() => new Error('error')));
        component.contactForm.setValue(VALID_FORM);
        await vi.advanceTimersByTimeAsync(0);

        component.onSubmit();

        expect(component.sending()).toBe(false);
    });

    // ── Honeypot ──────────────────────────────────────────────────────────────

    it('should have honeypot field in the DOM', () => {
        const honeypotWrap = fixture.nativeElement.querySelector('.form-field--honeypot');
        const honeypotInput: HTMLInputElement = fixture.nativeElement.querySelector('[formControlName="website"]');

        expect(honeypotWrap).toBeTruthy();
        expect(honeypotInput).toBeTruthy();
        expect(honeypotInput.getAttribute('tabindex')).toBe('-1');
    });

    it('should not call service when honeypot is filled', async () => {
        component.contactForm.setValue({ ...VALID_FORM, website: 'spam-value' });
        await vi.advanceTimersByTimeAsync(0);

        component.onSubmit();

        expect(mockContactService.sendMessage).not.toHaveBeenCalled();
        expect(component.submitStatus()).toBe('success');
    });

    // ── Rate limiting ─────────────────────────────────────────────────────────

    it('should block submission after 3 attempts in rate limit window', async () => {
        mockContactService.sendMessage.mockReturnValue(of(undefined));

        // 3 successful submissions
        for (let i = 0; i < 3; i++) {
            component.contactForm.setValue(VALID_FORM);
            await vi.advanceTimersByTimeAsync(0);
            component.onSubmit();
        }

        // 4th attempt should be blocked
        component.contactForm.setValue(VALID_FORM);
        await vi.advanceTimersByTimeAsync(0);
        component.onSubmit();
        fixture.detectChanges();

        expect(component.submitStatus()).toBe('rateLimit');
        expect(mockContactService.sendMessage).toHaveBeenCalledTimes(3);
    });

    it('should allow submission after rate limit window expires', async () => {
        mockContactService.sendMessage.mockReturnValue(of(undefined));

        // Fill localStorage with 3 old timestamps (outside the 10-min window)
        const oldTimestamp = Date.now() - 11 * 60 * 1000;
        localStorage.setItem('contact_submissions', JSON.stringify([oldTimestamp, oldTimestamp, oldTimestamp]));

        component.contactForm.setValue(VALID_FORM);
        await vi.advanceTimersByTimeAsync(0);
        component.onSubmit();

        expect(mockContactService.sendMessage).toHaveBeenCalledTimes(1);
        expect(component.submitStatus()).toBe('success');
    });

    // ── Analytics ─────────────────────────────────────────────────────────────

    it('trackea contact_form_submit en submit exitoso', async () => {
        mockContactService.sendMessage.mockReturnValue(of(undefined));
        component.contactForm.setValue(VALID_FORM);
        await vi.advanceTimersByTimeAsync(0);
        component.onSubmit();

        expect(trackSpy).toHaveBeenCalledWith('contact_form_submit');
    });

    it('trackea contact_form_error en submit con error', async () => {
        mockContactService.sendMessage.mockReturnValue(throwError(() => new Error('boom')));
        component.contactForm.setValue(VALID_FORM);
        await vi.advanceTimersByTimeAsync(0);
        component.onSubmit();

        expect(trackSpy).toHaveBeenCalledWith('contact_form_error');
    });

    // ─── Pack elegido desde servicios ─────────────────────────────────────────

    it('pre-escribe el mensaje cuando llegaron desde un pack', () => {
        TestBed.inject(ProjectInterestService).select('Multi-page site');
        fixture.detectChanges();

        const msg = component.contactForm.controls.message.value ?? '';
        expect(msg).toContain('Multi-page site');
        // Queda editable: es texto normal, no un campo oculto.
        expect(component.contactForm.controls.message.enabled).toBe(true);
    });

    it('no pisa lo que la persona ya venía escribiendo', () => {
        component.contactForm.controls.message.setValue('Ya escribí esto yo');
        fixture.detectChanges();

        TestBed.inject(ProjectInterestService).select('Online store');
        fixture.detectChanges();

        expect(component.contactForm.controls.message.value).toBe('Ya escribí esto yo');
    });

    it('muestra la promesa de respuesta junto al botón de enviar', () => {
        // Sin Calendly, es lo único que le dice a la persona qué pasa después.
        const promesa = fixture.nativeElement.querySelector('.contact__reply-promise');
        expect(promesa).toBeTruthy();
        expect(promesa.textContent.trim().length).toBeGreaterThan(0);
    });

    it('ya no ofrece agendar una llamada', () => {
        const html = fixture.nativeElement.innerHTML;
        expect(html).not.toContain('calendly');
        expect(fixture.nativeElement.querySelector('.contact__separator')).toBeNull();
    });

});
