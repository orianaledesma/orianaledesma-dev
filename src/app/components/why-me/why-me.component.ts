import { ChangeDetectionStrategy, Component, computed, inject } from '@angular/core';
import { LanguageService } from '../../services/language.service';
import { TRANSLATIONS } from '../../translations/translations';

@Component({
  selector: 'app-why-me',
  templateUrl: './why-me.component.html',
  styleUrl: './why-me.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class WhyMeComponent {
  private readonly lang = inject(LanguageService);
  readonly t = computed(() => TRANSLATIONS[this.lang.current()].whyMe);
}
