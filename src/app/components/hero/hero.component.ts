import { ChangeDetectionStrategy, Component, computed, inject } from '@angular/core';
import { LanguageService } from '../../services/language.service';
import { AnalyticsService } from '../../services/analytics.service';
import { TRANSLATIONS } from '../../translations/translations';

@Component({
  selector: 'app-hero',
  templateUrl: './hero.component.html',
  styleUrl: './hero.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HeroComponent {

  private readonly lang = inject(LanguageService);
  private readonly analytics = inject(AnalyticsService);
  readonly t = computed(() => TRANSLATIONS[this.lang.current()].hero);

  /** Tracking: CTA primario del hero → formulario de contacto. */
  onCtaPrimaryClick(): void {
    this.analytics.track('hero_cta_primary_click');
  }

  /** Tracking: CTA secundario del hero (See recent work → scroll a #work). */
  onCtaSecondaryClick(): void {
    this.analytics.track('hero_cta_secondary_click');
  }
}
