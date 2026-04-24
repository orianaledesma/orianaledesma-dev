import { ComponentFixture, TestBed } from '@angular/core/testing';
import { AvailabilityComponent } from './availability.component';
import { AVAILABILITY_COPY } from './availability.copy';

describe('AvailabilityComponent', () => {
  let fixture: ComponentFixture<AvailabilityComponent>;
  let component: AvailabilityComponent;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AvailabilityComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(AvailabilityComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should render the correct number of slots', () => {
    const cards = fixture.nativeElement.querySelectorAll('.slot-card');
    expect(cards.length).toBe(AVAILABILITY_COPY.slots.length);
  });

  it('should apply --open class to open slots', () => {
    const dots = fixture.nativeElement.querySelectorAll('.slot-card__dot');
    AVAILABILITY_COPY.slots.forEach((slot, i) => {
      if (slot.open) {
        expect(dots[i].classList).toContain('slot-card__dot--open');
      } else {
        expect(dots[i].classList).toContain('slot-card__dot--closed');
      }
    });
  });

  it('should render CTA linking to #contact', () => {
    const cta = fixture.nativeElement.querySelector('.availability__footer a');
    expect(cta.getAttribute('href')).toBe('#contact');
    expect(cta.textContent.trim()).toBe(AVAILABILITY_COPY.cta);
  });

  it('should have accessible section structure', () => {
    const section = fixture.nativeElement.querySelector('section');
    const h2      = fixture.nativeElement.querySelector('h2');
    expect(section.getAttribute('aria-labelledby')).toBe(h2.id);
  });
});
