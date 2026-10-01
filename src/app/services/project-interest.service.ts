import { Injectable, signal } from '@angular/core';

/**
 * Qué pack venía mirando quien hace clic en "Start this one".
 *
 * Los packs y el formulario son componentes hermanos de la misma página, así
 * que el dato viaja por una señal en vez de por la URL: no ensucia el link
 * que la gente copia ni deja un query param colgado si recarga.
 *
 * El formulario lo lee una vez para pre-escribir el mensaje; la persona puede
 * borrarlo o cambiarlo, es texto normal.
 */
@Injectable({ providedIn: 'root' })
export class ProjectInterestService {
  private readonly _pack = signal<string | null>(null);

  /** Nombre del pack elegido, o null si llegaron al formulario por otro lado. */
  readonly pack = this._pack.asReadonly();

  select(packName: string): void {
    this._pack.set(packName);
  }

  clear(): void {
    this._pack.set(null);
  }
}
