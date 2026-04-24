import { ComponentFixture, TestBed } from '@angular/core/testing';
import { WhyMeComponent } from './why-me.component';
import { WHY_ME_COPY } from './why-me.copy';

describe('WhyMeComponent', () => {
  let fixture: ComponentFixture<WhyMeComponent>;
  let component: WhyMeComponent;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [WhyMeComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(WhyMeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should render the h2 heading', () => {
    const h2 = fixture.nativeElement.querySelector('h2');
    expect(h2.textContent.trim()).toBe(WHY_ME_COPY.h2);
  });

  it('should render all bullets', () => {
    const items = fixture.nativeElement.querySelectorAll('.why-me__item');
    expect(items.length).toBe(WHY_ME_COPY.bullets.length);
  });

  it('should have aria-labelledby pointing to heading id', () => {
    const section = fixture.nativeElement.querySelector('section');
    const h2      = fixture.nativeElement.querySelector('h2');
    expect(section.getAttribute('aria-labelledby')).toBe(h2.id);
  });
});
