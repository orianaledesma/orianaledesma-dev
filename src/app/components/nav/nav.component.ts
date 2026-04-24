import {
  ChangeDetectionStrategy,
  Component,
  HostListener,
  computed,
  inject,
  signal,
} from '@angular/core';
import { NAV_COPY } from './nav.copy';
import { LanguageService } from '../../services/language.service';
import { TRANSLATIONS } from '../../translations/translations';
import { Lang } from '../../models/language.model';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrl: './nav.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class NavComponent {
  scrolled  = signal(false);
  menuOpen  = signal(false);
  langOpen  = signal(false);

  private readonly langService = inject(LanguageService);

  readonly activeLang  = computed(() => this.langService.current().toUpperCase());
  readonly t           = computed(() => TRANSLATIONS[this.langService.current()].nav);
  readonly externalLinks = NAV_COPY.externalLinks;
  readonly languages     = NAV_COPY.languages;

  @HostListener('window:scroll')
  onScroll(): void {
    this.scrolled.set(window.scrollY > 20);
    if (this.langOpen()) this.langOpen.set(false);
  }

  scrollTo(fragment: string): void {
    document.getElementById(fragment)?.scrollIntoView({ behavior: 'smooth' });
    this.menuOpen.set(false);
  }

  toggleMenu(): void {
    this.menuOpen.update(v => !v);
  }

  toggleLang(): void {
    this.langOpen.update(v => !v);
  }

  closeLang(): void {
    this.langOpen.set(false);
  }

  setLang(code: string): void {
    this.langService.set(code.toLowerCase() as Lang);
    this.menuOpen.set(false);
    this.langOpen.set(false);
  }
}
