import { ComponentFixture, TestBed } from '@angular/core/testing';
import { TrustBarComponent } from './trust-bar.component';
import { TRUST_BAR_COPY } from './trust-bar.copy';

describe('TrustBarComponent', () => {
  let fixture: ComponentFixture<TrustBarComponent>;
  let component: TrustBarComponent;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TrustBarComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(TrustBarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should render all trust bar items', () => {
    const items = fixture.nativeElement.querySelectorAll('.trust-bar__text');
    expect(items.length).toBe(TRUST_BAR_COPY.items.length);
  });

  it('should render correct text for each item', () => {
    const items = fixture.nativeElement.querySelectorAll('.trust-bar__text');
    TRUST_BAR_COPY.items.forEach((text, i) => {
      expect(items[i].textContent.trim()).toBe(text);
    });
  });

  it('should have accessible section label', () => {
    const section = fixture.nativeElement.querySelector('section');
    expect(section.getAttribute('aria-label')).toBe('Credentials');
  });
});
