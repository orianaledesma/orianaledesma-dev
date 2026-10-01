import type { Mock } from "vitest";
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { NavComponent } from './nav.component';
import { AnalyticsService } from '../../services/analytics.service';

describe('NavComponent', () => {
    let fixture: ComponentFixture<NavComponent>;
    let component: NavComponent;
    let trackSpy: Mock;

    beforeEach(async () => {
        await TestBed.configureTestingModule({
            imports: [NavComponent],
        }).compileComponents();

        fixture = TestBed.createComponent(NavComponent);
        component = fixture.componentInstance;
        trackSpy = vi.spyOn(TestBed.inject(AnalyticsService), 'track').mockReturnValue(undefined);
        fixture.detectChanges();
    });

    it('crea el componente', () => {
        expect(component).toBeTruthy();
    });

    it('trackea nav_cta_click cuando se clickea el CTA del nav (desktop)', () => {
        const cta = fixture.debugElement.query(By.css('a.nav__cta'));
        cta.triggerEventHandler('click', new MouseEvent('click'));

        expect(trackSpy).toHaveBeenCalledWith('nav_cta_click');
    });

    it('trackea nav_cta_click cuando se clickea el CTA del nav (mobile)', () => {
        const ctaMobile = fixture.debugElement.query(By.css('a.nav__mobile-cta'));
        ctaMobile.triggerEventHandler('click', new MouseEvent('click'));

        expect(trackSpy).toHaveBeenCalledWith('nav_cta_click');
    });

    it('el CTA del nav lleva al formulario, dentro de la página', () => {
        const cta = fixture.debugElement.query(By.css('a.nav__cta'));

        expect(cta.attributes['href']).toBe('#contact');
        // Ya no es un destino externo: abrirlo en otra pestaña sacaría a la
        // persona del sitio para llevarla a una sección del mismo sitio.
        expect(cta.attributes['target']).toBeUndefined();
    });

    it('onCtaClick cierra el menú mobile', () => {
        component.menuOpen.set(true);
        component.onCtaClick();

        expect(component.menuOpen()).toBe(false);
    });
});
