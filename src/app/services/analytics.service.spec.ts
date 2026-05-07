import { TestBed } from '@angular/core/testing';
import { AnalyticsService } from './analytics.service';

describe('AnalyticsService', () => {
  let svc: AnalyticsService;
  let originalGtag: Window['gtag'];

  beforeEach(() => {
    TestBed.configureTestingModule({});
    svc = TestBed.inject(AnalyticsService);
    originalGtag = window.gtag;
  });

  afterEach(() => {
    window.gtag = originalGtag;
  });

  it('llama a window.gtag con event + name + params', () => {
    const spy = jasmine.createSpy('gtag');
    window.gtag = spy;

    svc.track('hero_cta_primary_click', { section: 'hero' });

    expect(spy).toHaveBeenCalledOnceWith('event', 'hero_cta_primary_click', { section: 'hero' });
  });

  it('usa params vacío por default si no se pasan', () => {
    const spy = jasmine.createSpy('gtag');
    window.gtag = spy;

    svc.track('nav_cta_click');

    expect(spy).toHaveBeenCalledOnceWith('event', 'nav_cta_click', {});
  });

  it('es no-op si window.gtag no está definido', () => {
    window.gtag = undefined;

    expect(() => svc.track('work_card_click', { project: 'exploriando' })).not.toThrow();
  });

  it('no propaga errores si gtag tira', () => {
    window.gtag = (() => { throw new Error('boom'); }) as Window['gtag'];

    expect(() => svc.track('contact_form_submit')).not.toThrow();
  });
});
