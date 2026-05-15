import { ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { of, throwError } from 'rxjs';
import { LeadMagnetComponent } from './lead-magnet.component';
import { ContactService } from '../../services/contact.service';
import { AnalyticsService } from '../../services/analytics.service';

describe('LeadMagnetComponent', () => {
  let fixture: ComponentFixture<LeadMagnetComponent>;
  let component: LeadMagnetComponent;
  let contactService: ContactService;
  let trackSpy: jasmine.Spy;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LeadMagnetComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(LeadMagnetComponent);
    component = fixture.componentInstance;
    contactService = TestBed.inject(ContactService);
    trackSpy = spyOn(TestBed.inject(AnalyticsService), 'track');
    localStorage.removeItem('lead_magnet_submissions');
    fixture.detectChanges();
  });

  it('crea el componente', () => {
    expect(component).toBeTruthy();
  });

  it('no envía si el email es inválido', () => {
    const sendSpy = spyOn(contactService, 'sendMessage');
    component.form.controls.email.setValue('not-an-email');
    component.onSubmit();

    expect(sendSpy).not.toHaveBeenCalled();
    expect(component.status()).toBe('idle');
  });

  it('honeypot lleno → success silencioso sin enviar', () => {
    const sendSpy = spyOn(contactService, 'sendMessage');
    component.form.controls.email.setValue('real@user.com');
    component.form.controls.website.setValue('bot-filled-this');
    component.onSubmit();

    expect(sendSpy).not.toHaveBeenCalled();
    expect(component.status()).toBe('success');
  });

  it('envía vía ContactService y trackea lead_magnet_submit al éxito', () => {
    const sendSpy = spyOn(contactService, 'sendMessage').and.returnValue(of(undefined));
    component.form.controls.email.setValue('owner@business.com');
    component.onSubmit();

    expect(sendSpy).toHaveBeenCalledWith({
      name: 'Lead magnet — free online presence check',
      email: 'owner@business.com',
      message: 'Requested the free online presence check via the lead magnet form.',
    });
    expect(component.status()).toBe('success');
    expect(trackSpy).toHaveBeenCalledOnceWith('lead_magnet_submit');
  });

  it('status error si ContactService falla', () => {
    spyOn(contactService, 'sendMessage').and.returnValue(throwError(() => new Error('fail')));
    component.form.controls.email.setValue('owner@business.com');
    component.onSubmit();

    expect(component.status()).toBe('error');
  });

  it('rate limit tras 3 envíos en la ventana', () => {
    spyOn(contactService, 'sendMessage').and.returnValue(of(undefined));
    for (let i = 0; i < 3; i++) {
      component.form.controls.email.setValue(`a${i}@b.com`);
      component.onSubmit();
    }
    component.form.controls.email.setValue('blocked@b.com');
    component.onSubmit();

    expect(component.status()).toBe('rateLimit');
  });
});
