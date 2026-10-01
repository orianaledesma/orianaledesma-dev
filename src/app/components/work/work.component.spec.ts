import type { Mock } from "vitest";
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { WorkComponent } from './work.component';
import { AnalyticsService } from '../../services/analytics.service';

describe('WorkComponent', () => {
    let fixture: ComponentFixture<WorkComponent>;
    let component: WorkComponent;
    let trackSpy: Mock;

    beforeEach(async () => {
        await TestBed.configureTestingModule({
            imports: [WorkComponent],
        }).compileComponents();

        fixture = TestBed.createComponent(WorkComponent);
        component = fixture.componentInstance;
        trackSpy = vi.spyOn(TestBed.inject(AnalyticsService), 'track').mockReturnValue(undefined);
        fixture.detectChanges();
    });

    it('crea el componente', () => {
        expect(component).toBeTruthy();
    });

    it('trackea work_card_click con project=title para case real (no placeholder)', () => {
        const realCase = component.cases.find(c => c.ctaHref && !c.placeholder);
        expect(realCase).toBeDefined();

        component.onCaseCtaClick(realCase!);

        expect(trackSpy).toHaveBeenCalledTimes(1);

        expect(trackSpy).toHaveBeenCalledWith('work_card_click', { project: realCase!.title });
    });

    it('todo caso publicado tiene a dónde llevar; los que están en obra, no', () => {
        // Derivado de los datos, no un número fijo: agregar o sacar un caso no
        // debería obligar a editar el test. Lo que sí es invariante: una tarjeta
        // sin link tiene que estar marcada como placeholder, o queda muerta.
        expect(component.cases.length).toBeGreaterThan(0);

        for (const c of component.cases) {
            if (c.placeholder) {
                expect(c.ctaHref).toBeUndefined();
            }
            else {
                expect(c.ctaHref).toBeTruthy();
            }
        }
    });

    it('hay al menos un caso en producción con link', () => {
        const publicados = component.cases.filter(c => !c.placeholder && c.ctaHref);
        expect(publicados.length).toBeGreaterThan(0);
    });

    it('CTA outbound de la card real dispara tracking al click en el DOM', () => {
        const outboundLink = fixture.debugElement.query(By.css('.case-card a[target="_blank"]'));
        expect(outboundLink).toBeTruthy();
        outboundLink.triggerEventHandler('click', new MouseEvent('click'));

        expect(trackSpy).toHaveBeenCalledWith('work_card_click', expect.any(Object));
    });
});
