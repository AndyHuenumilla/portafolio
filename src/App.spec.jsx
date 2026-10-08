import { render, screen } from '@testing-library/react';
import App from './App';
import { simularFetch } from './pruebas/ayudas';

describe('App (prueba de integración)', () => {
  beforeEach(() => {
    simularFetch({
      perfil: { nombre: 'Ana Pérez', titulo: 'Estudiante', biografia: 'Bio', foto: 'f.svg', email: 'a@a.cl' },
      proyectos: [{ id: 1, titulo: 'Proyecto A', descripcion: 'D', tecnologias: ['React'], imagen: 'a.svg', enlace: 'https://a.cl' }],
      'noticias-tecnologia': [{ id: 1, titulo: 'Noticia tech', fecha: '2026-10-01', contenido: 'c' }],
      'noticias-carrera': [{ id: 1, titulo: 'Noticia carrera', fecha: '2026-10-01', contenido: 'c' }],
    });
  });

  it('muestra todas las secciones del portafolio con sus datos', async () => {
    render(<App />);
    expect(await screen.findByText('Ana Pérez')).toBeTruthy();
    expect(await screen.findByText('Proyecto A')).toBeTruthy();
    expect(await screen.findByText('Noticia tech')).toBeTruthy();
    expect(await screen.findByText('Noticia carrera')).toBeTruthy();
    expect(screen.getByRole('heading', { name: 'Contacto' })).toBeTruthy();
  });

  it('incluye el enlace para saltar al contenido (teclado)', () => {
    render(<App />);
    expect(screen.getByText('Saltar al contenido').getAttribute('href')).toBe('#contenido');
  });
});
