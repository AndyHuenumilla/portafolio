import { cargarJSON } from './datos';
import { respuestaJSON } from '../pruebas/ayudas';

describe('cargarJSON', () => {
  it('devuelve el contenido del archivo cuando la respuesta es correcta', async () => {
    spyOn(window, 'fetch').and.returnValue(respuestaJSON([{ id: 1 }]));
    const datos = await cargarJSON('proyectos');
    expect(datos).toEqual([{ id: 1 }]);
  });

  it('lanza un error si el servidor responde con falla', async () => {
    spyOn(window, 'fetch').and.returnValue(respuestaJSON({}, false, 404));
    await expectAsync(cargarJSON('x')).toBeRejectedWithError(/404/);
  });
});
