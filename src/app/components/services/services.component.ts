import { ChangeDetectionStrategy, Component, computed, inject } from '@angular/core';
import { LanguageService } from '../../services/language.service';
import { AnalyticsService } from '../../services/analytics.service';
import { ProjectInterestService } from '../../services/project-interest.service';
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
  /** Maps each pricing card index to its analytics pack id. */
  readonly cardPacks: readonly ServicePack[] = ['one-page', 'multi', 'store'];

  private readonly lang = inject(LanguageService);
  private readonly analytics = inject(AnalyticsService);
  private readonly interest = inject(ProjectInterestService);

  readonly t = computed(() => TRANSLATIONS[this.lang.current()].services);

  /**
   * Lleva al formulario de contacto con el pack ya elegido.
   *
   * El nombre viaja por ProjectInterestService y no por la URL: el formulario
   * lo usa para pre-escribir el mensaje, así la consulta llega sabiendo de
   * qué pack vino sin que Ori tenga que preguntarlo.
   *
   * @param pack  Identificador para segmentar en GA4.
   * @param title Nombre visible del pack, el que se escribe en el mensaje.
   */
  onCtaClick(pack: ServicePack, title: string): void {
    this.interest.select(title);
    this.analytics.track('services_card_click', { pack });
  }
}
