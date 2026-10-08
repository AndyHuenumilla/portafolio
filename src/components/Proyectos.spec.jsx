import { render, screen } from '@testing-library/react';
import Proyectos from './Proyectos';
import { simularFetch } from '../pruebas/ayudas';

describe('Proyectos', () => {
  const lista = [
    { id: 1, titulo: 'Proyecto A', descripcion: 'Desc A', tecnologias: ['React'], imagen: 'a.svg', enlace: 'https://a.cl' },
    { id: 2, titulo: 'Proyecto B', descripcion: 'Desc B', tecnologias: ['CSS'], imagen: 'b.svg', enlace: 'https://b.cl' },
    { id: 3, titulo: 'Proyecto C', descripcion: 'Desc C', tecnologias: ['JS'], imagen: 'c.svg', enlace: 'https://c.cl' },
  ];

  it('dibuja una tarjeta por cada proyecto del JSON', async () => {
    simularFetch({ proyectos: lista });
    render(<Proyectos />);
    expect(await screen.findByText('Proyecto A')).toBeTruthy();
    expect(screen.getAllByRole('link', { name: 'Ver proyecto' }).length).toBe(3);
  });

  it('muestra un aviso si falla la carga', async () => {
    simularFetch({});
    render(<Proyectos />);
    expect((await screen.findByRole('alert')).textContent).toContain('No se pudieron cargar');
  });
});
