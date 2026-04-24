import { ChangeDetectionStrategy, Component, computed, inject } from '@angular/core';
import { LanguageService } from '../../services/language.service';
import { TRANSLATIONS } from '../../translations/translations';

@Component({
  selector: 'app-availability',
  templateUrl: './availability.component.html',
  styleUrl: './availability.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AvailabilityComponent {
  private readonly lang = inject(LanguageService);
  readonly t = computed(() => TRANSLATIONS[this.lang.current()].availability);
}
