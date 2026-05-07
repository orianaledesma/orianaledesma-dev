import { ChangeDetectionStrategy, Component, computed, inject } from '@angular/core';
import { CaseStudyCopy, WORK_COPY } from './work.copy';
import { LanguageService } from '../../services/language.service';
import { AnalyticsService } from '../../services/analytics.service';
import { TRANSLATIONS } from '../../translations/translations';

@Component({
  selector: 'app-work',
  templateUrl: './work.component.html',
  styleUrl: './work.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class WorkComponent {
  readonly cases = WORK_COPY.cases;

  private readonly lang = inject(LanguageService);
  private readonly analytics = inject(AnalyticsService);
  readonly t = computed(() => TRANSLATIONS[this.lang.current()].work);

  /**
   * Tracking: click en el CTA de una case card.
   * Diferencia entre case real (outbound a portfolio) y placeholder ("Apply for a slot" → contact).
   */
  onCaseCtaClick(item: CaseStudyCopy): void {
    if (item.placeholder) {
      this.analytics.track('work_apply_click');
    } else {
      this.analytics.track('work_card_click', { project: item.title });
    }
  }
}
