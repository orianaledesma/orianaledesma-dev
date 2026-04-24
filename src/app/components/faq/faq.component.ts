import { ChangeDetectionStrategy, Component, computed, effect, inject, signal } from '@angular/core';
import { LanguageService } from '../../services/language.service';
import { TRANSLATIONS } from '../../translations/translations';

@Component({
  selector: 'app-faq',
  templateUrl: './faq.component.html',
  styleUrl: './faq.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class FaqComponent {
  openIndex = signal<number | null>(0);

  private readonly lang = inject(LanguageService);
  readonly t = computed(() => TRANSLATIONS[this.lang.current()].faq);

  constructor() {
    let initialized = false;
    effect(() => {
      this.lang.current();
      if (!initialized) { initialized = true; return; }
      this.openIndex.set(null);
    }, { allowSignalWrites: true });
  }

  toggle(index: number): void {
    this.openIndex.set(this.openIndex() === index ? null : index);
  }
}
