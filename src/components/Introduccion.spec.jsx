import { render, screen } from '@testing-library/react';
import Introduccion from './Introduccion';
import { simularFetch } from '../pruebas/ayudas';

describe('Introduccion', () => {
  const perfil = {
    nombre: 'Ana Pérez',
    titulo: 'Estudiante',
    biografia: 'Me gusta programar.',
    foto: './img/foto.svg',
    email: 'ana@correo.cl',
  };

  it('muestra nombre, título, biografía y foto con alt', async () => {
    simularFetch({ perfil });
    render(<Introduccion />);
    expect(await screen.findByText('Ana Pérez')).toBeTruthy();
    expect(screen.getByText('Me gusta programar.')).toBeTruthy();
    expect(screen.getByAltText('Foto de Ana Pérez')).toBeTruthy();
  });

  it('muestra un aviso si el perfil no se puede cargar', async () => {
    simularFetch({});
    render(<Introduccion />);
    expect((await screen.findByRole('alert')).textContent).toContain('No se pudo cargar el perfil');
  });
});
