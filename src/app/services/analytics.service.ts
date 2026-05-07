import { Injectable } from '@angular/core';

/**
 * Eventos GA4 trackeados desde orianaledesma.dev. Cada evento representa
 * una intención del usuario, no un click cualquiera.
 */
export type AnalyticsEvent =
  | 'hero_cta_primary_click'      // CTA principal del hero (See plans & pricing)
  | 'hero_cta_secondary_click'    // CTA secundario del hero (Short intro call)
  | 'nav_cta_click'               // CTA del nav (Send a brief)
  | 'work_card_click'             // CTA outbound de una case card (Exploriando, TC)
  | 'work_apply_click'            // CTA "Apply for a slot" en Work
  | 'contact_form_submit'         // submit exitoso del form de contacto
  | 'contact_form_error';         // error del form de contacto (EmailJS, validación)

export type AnalyticsParams = Record<string, string | number | boolean>;

type Gtag = (
  command: 'event',
  name: string,
  params?: AnalyticsParams,
) => void;

declare global {
  interface Window {
    gtag?: Gtag;
  }
}

/**
 * Wrapper tipado sobre `window.gtag` (GA4). El script de Google Tag se carga
 * en `index.html` con el ID `G-33HPNM69MM`. Si el script no está disponible
 * (SSR, dev sin GA, ad-blockers), `track()` es no-op silencioso.
 *
 * Este sitio es single-page con anchors → el pageview automático del
 * `gtag('config', ...)` es suficiente; no hace falta tracking de rutas SPA.
 */
@Injectable({ providedIn: 'root' })
export class AnalyticsService {
  /**
   * Dispara un evento custom GA4. Nunca lanza: analytics no debe romper la UI.
   * @param event Nombre del evento (union tipado para evitar typos).
   * @param params Parámetros opcionales — se envían tal cual a gtag.
   */
  track(event: AnalyticsEvent, params: AnalyticsParams = {}): void {
    try {
      if (typeof window === 'undefined') return;
      const gtag = window.gtag;
      if (typeof gtag !== 'function') return;
      gtag('event', event, params);
    } catch {
      /* no-op */
    }
  }
}
