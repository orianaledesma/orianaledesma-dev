import { ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { HeroComponent } from './hero.component';
import { AnalyticsService } from '../../services/analytics.service';

describe('HeroComponent', () => {
  let fixture: ComponentFixture<HeroComponent>;
  let trackSpy: jasmine.Spy;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HeroComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(HeroComponent);
    trackSpy = spyOn(TestBed.inject(AnalyticsService), 'track');
    fixture.detectChanges();
  });

  it('crea el componente', () => {
    expect(fixture.componentInstance).toBeTruthy();
  });

  it('trackea hero_cta_primary_click al clickear el CTA primario', () => {
    const primary = fixture.debugElement.query(By.css('.hero__actions a.btn--primary'));
    primary.triggerEventHandler('click', new MouseEvent('click'));

    expect(trackSpy).toHaveBeenCalledOnceWith('hero_cta_primary_click');
  });

  it('trackea hero_cta_secondary_click al clickear el CTA secundario', () => {
    const secondary = fixture.debugElement.query(By.css('.hero__actions a.btn--outline'));
    secondary.triggerEventHandler('click', new MouseEvent('click'));

    expect(trackSpy).toHaveBeenCalledOnceWith('hero_cta_secondary_click');
  });
});
