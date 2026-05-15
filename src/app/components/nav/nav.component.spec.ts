import { ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { NavComponent } from './nav.component';
import { AnalyticsService } from '../../services/analytics.service';

describe('NavComponent', () => {
  let fixture: ComponentFixture<NavComponent>;
  let component: NavComponent;
  let trackSpy: jasmine.Spy;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NavComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(NavComponent);
    component = fixture.componentInstance;
    trackSpy = spyOn(TestBed.inject(AnalyticsService), 'track');
    fixture.detectChanges();
  });

  it('crea el componente', () => {
    expect(component).toBeTruthy();
  });

  it('trackea nav_cta_click cuando se clickea el CTA del nav (desktop)', () => {
    const cta = fixture.debugElement.query(By.css('a.nav__cta'));
    cta.triggerEventHandler('click', new MouseEvent('click'));

    expect(trackSpy).toHaveBeenCalledWith('nav_cta_click');
  });

  it('trackea nav_cta_click cuando se clickea el CTA del nav (mobile)', () => {
    const ctaMobile = fixture.debugElement.query(By.css('a.nav__mobile-cta'));
    ctaMobile.triggerEventHandler('click', new MouseEvent('click'));

    expect(trackSpy).toHaveBeenCalledWith('nav_cta_click');
  });

  it('el CTA del nav apunta al Calendly y abre en pestaña nueva', () => {
    const cta = fixture.debugElement.query(By.css('a.nav__cta'));

    expect(cta.attributes['href']).toBe(component.calendlyUrl);
    expect(cta.attributes['target']).toBe('_blank');
    expect(cta.attributes['rel']).toBe('noopener');
  });

  it('onCtaClick cierra el menú mobile', () => {
    component.menuOpen.set(true);
    component.onCtaClick();

    expect(component.menuOpen()).toBe(false);
  });
});
