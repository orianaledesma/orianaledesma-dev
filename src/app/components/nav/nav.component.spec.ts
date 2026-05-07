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
    const cta = fixture.debugElement.query(By.css('button.nav__cta'));
    cta.triggerEventHandler('click', new MouseEvent('click'));

    expect(trackSpy).toHaveBeenCalledWith('nav_cta_click');
  });

  it('trackea nav_cta_click cuando se clickea el CTA del nav (mobile)', () => {
    const ctaMobile = fixture.debugElement.query(By.css('button.nav__mobile-cta'));
    ctaMobile.triggerEventHandler('click', new MouseEvent('click'));

    expect(trackSpy).toHaveBeenCalledWith('nav_cta_click');
  });

  it('onCtaClick dispara scrollTo("contact")', () => {
    spyOn(component, 'scrollTo');
    component.onCtaClick();

    expect(component.scrollTo).toHaveBeenCalledWith('contact');
  });
});
