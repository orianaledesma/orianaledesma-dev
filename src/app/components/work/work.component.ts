import { ChangeDetectionStrategy, Component, computed, inject } from '@angular/core';
import { WORK_COPY } from './work.copy';
import { LanguageService } from '../../services/language.service';
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
  readonly t = computed(() => TRANSLATIONS[this.lang.current()].work);
}
