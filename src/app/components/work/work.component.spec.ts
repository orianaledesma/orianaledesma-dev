import { ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { WorkComponent } from './work.component';
import { AnalyticsService } from '../../services/analytics.service';

describe('WorkComponent', () => {
  let fixture: ComponentFixture<WorkComponent>;
  let component: WorkComponent;
  let trackSpy: jasmine.Spy;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [WorkComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(WorkComponent);
    component = fixture.componentInstance;
    trackSpy = spyOn(TestBed.inject(AnalyticsService), 'track');
    fixture.detectChanges();
  });

  it('crea el componente', () => {
    expect(component).toBeTruthy();
  });

  it('trackea work_card_click con project=title para case real (no placeholder)', () => {
    const realCase = component.cases.find(c => c.ctaHref && !c.placeholder);
    expect(realCase).toBeDefined();

    component.onCaseCtaClick(realCase!);

    expect(trackSpy).toHaveBeenCalledOnceWith('work_card_click', { project: realCase!.title });
  });

  it('trackea work_apply_click para card placeholder', () => {
    const placeholderCase = component.cases.find(c => c.placeholder);
    expect(placeholderCase).toBeDefined();

    component.onCaseCtaClick(placeholderCase!);

    expect(trackSpy).toHaveBeenCalledOnceWith('work_apply_click');
  });

  it('CTA outbound de la card real dispara tracking al click en el DOM', () => {
    const outboundLink = fixture.debugElement.query(By.css('.case-card a[target="_blank"]'));
    expect(outboundLink).toBeTruthy();
    outboundLink.triggerEventHandler('click', new MouseEvent('click'));

    expect(trackSpy).toHaveBeenCalledWith('work_card_click', jasmine.any(Object));
  });
});
