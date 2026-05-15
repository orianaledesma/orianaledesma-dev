import { ChangeDetectionStrategy, Component, computed, inject } from '@angular/core';
import { LanguageService } from '../../services/language.service';
import { AnalyticsService } from '../../services/analytics.service';
import { TRANSLATIONS } from '../../translations/translations';

/** Identifies which offering a CTA belongs to, for analytics segmentation. */
export type ServicePack = 'one-page' | 'multi' | 'store' | 'care';

@Component({
  selector: 'app-services',
  templateUrl: './services.component.html',
  styleUrl: './services.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ServicesComponent {
  readonly calendlyUrl = 'https://calendly.com/hello-orianaledesma/20min';

  /** Maps each pricing card index to its analytics pack id. */
  readonly cardPacks: readonly ServicePack[] = ['one-page', 'multi', 'store'];

  private readonly lang = inject(LanguageService);
  private readonly analytics = inject(AnalyticsService);

  readonly t = computed(() => TRANSLATIONS[this.lang.current()].services);

  /**
   * Tracking: click en el CTA de un pack o del Care Plan → Calendly.
   * @param pack Identificador del pack para segmentar en GA4.
   */
  onCtaClick(pack: ServicePack): void {
    this.analytics.track('services_card_click', { pack });
  }
}
