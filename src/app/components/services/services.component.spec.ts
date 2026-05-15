import { ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { ServicesComponent } from './services.component';
import { AnalyticsService } from '../../services/analytics.service';

describe('ServicesComponent', () => {
  let fixture: ComponentFixture<ServicesComponent>;
  let component: ServicesComponent;
  let trackSpy: jasmine.Spy;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ServicesComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(ServicesComponent);
    component = fixture.componentInstance;
    trackSpy = spyOn(TestBed.inject(AnalyticsService), 'track');
    fixture.detectChanges();
  });

  it('crea el componente', () => {
    expect(component).toBeTruthy();
  });

  it('renderiza 3 cards de servicio + el Care Plan', () => {
    const cards = fixture.debugElement.queryAll(By.css('.service-card'));
    const carePlan = fixture.debugElement.query(By.css('.care-plan'));

    expect(cards.length).toBe(3);
    expect(carePlan).toBeTruthy();
  });

  it('marca la segunda card como destacada (featured)', () => {
    const cards = fixture.debugElement.queryAll(By.css('.service-card'));

    expect(cards[1].nativeElement.classList).toContain('service-card--featured');
    expect(cards[0].nativeElement.classList).not.toContain('service-card--featured');
    expect(cards[2].nativeElement.classList).not.toContain('service-card--featured');
  });

  it('muestra el precio en niveles (amount + timeline)', () => {
    const firstCard = fixture.debugElement.query(By.css('.service-card'));
    const amount = firstCard.query(By.css('.service-card__amount'));
    const timeline = firstCard.query(By.css('.service-card__timeline'));

    expect(amount.nativeElement.textContent.trim()).toBe('€800');
    expect(timeline.nativeElement.textContent.trim()).toBe('ready in 1 week');
  });

  it('la tercera card muestra el scope embebido', () => {
    const cards = fixture.debugElement.queryAll(By.css('.service-card'));
    const scope = cards[2].query(By.css('.service-card__scope'));

    expect(scope).toBeTruthy();
    expect(scope.nativeElement.textContent.trim()).toBe('up to 30 products');
  });

  it('los CTAs apuntan al Calendly y abren en pestaña nueva', () => {
    const cta = fixture.debugElement.query(By.css('.service-card__cta'));

    expect(cta.attributes['href']).toBe(component.calendlyUrl);
    expect(cta.attributes['target']).toBe('_blank');
    expect(cta.attributes['rel']).toBe('noopener');
  });

  it('trackea services_card_click con el pack al clickear una card', () => {
    const cards = fixture.debugElement.queryAll(By.css('.service-card__cta'));
    cards[0].triggerEventHandler('click', new MouseEvent('click'));

    expect(trackSpy).toHaveBeenCalledWith('services_card_click', { pack: 'one-page' });
  });

  it('trackea services_card_click con pack "care" al clickear el Care Plan', () => {
    const careCta = fixture.debugElement.query(By.css('.care-plan__cta'));
    careCta.triggerEventHandler('click', new MouseEvent('click'));

    expect(trackSpy).toHaveBeenCalledWith('services_card_click', { pack: 'care' });
  });
});
