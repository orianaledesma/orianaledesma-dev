import { afterEach, vi } from 'vitest';

/**
 * Restaura los spies después de cada test.
 *
 * Jasmine lo hacía solo; Vitest no. Sin esto, un `vi.spyOn` de un test queda
 * activo en los siguientes, y la fuga aparece como una falla en un archivo
 * que no tiene nada que ver.
 */
afterEach(() => {
  vi.restoreAllMocks();
});
