import { Injectable, signal } from '@angular/core';
import { Lang, SUPPORTED_LANGS } from '../models/language.model';

const STORAGE_KEY = 'oriana_lang';

@Injectable({ providedIn: 'root' })
export class LanguageService {
  readonly current = signal<Lang>(this.getInitialLang());

  set(lang: Lang): void {
    this.current.set(lang);
    document.documentElement.lang = lang;
    try { localStorage.setItem(STORAGE_KEY, lang); } catch { /* noop */ }
  }

  private getInitialLang(): Lang {
    try {
      const stored = localStorage.getItem(STORAGE_KEY) as Lang | null;
      if (stored && SUPPORTED_LANGS.includes(stored)) return stored;
    } catch { /* noop */ }
    return 'en';
  }
}
