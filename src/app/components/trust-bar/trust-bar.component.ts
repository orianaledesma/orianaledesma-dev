import { ChangeDetectionStrategy, Component, computed, inject } from '@angular/core';
import { LanguageService } from '../../services/language.service';
import { TRANSLATIONS } from '../../translations/translations';

@Component({
  selector: 'app-trust-bar',
  templateUrl: './trust-bar.component.html',
  styleUrl: './trust-bar.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TrustBarComponent {
  private readonly lang = inject(LanguageService);
  readonly t = computed(() => TRANSLATIONS[this.lang.current()].trustBar);
}
