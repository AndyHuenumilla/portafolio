import { render, screen } from '@testing-library/react';
import SeccionNoticias, { formatearFecha } from './SeccionNoticias';
import { simularFetch } from '../pruebas/ayudas';

describe('SeccionNoticias (datos desde JSON con mock de fetch)', () => {
  const noticias = [
    { id: 1, titulo: 'Primera noticia', fecha: '2026-10-01', contenido: 'Contenido uno' },
    { id: 2, titulo: 'Segunda noticia', fecha: '2026-09-20', contenido: 'Contenido dos' },
  ];

  it('muestra "Cargando" mientras llegan los datos', () => {
    simularFetch({ demo: noticias });
    render(<SeccionNoticias id="n" titulo="Noticias" archivo="demo" />);
    expect(screen.getByRole('status').textContent).toContain('Cargando');
  });

  it('pide el archivo JSON correcto', async () => {
    const espia = simularFetch({ demo: noticias });
    render(<SeccionNoticias id="n" titulo="Noticias" archivo="demo" />);
    await screen.findByText('Primera noticia');
    expect(espia).toHaveBeenCalledWith('./data/demo.json');
  });

  it('dibuja una noticia por cada elemento del JSON', async () => {
    simularFetch({ demo: noticias });
    render(<SeccionNoticias id="n" titulo="Noticias" archivo="demo" />);
    expect(await screen.findByText('Primera noticia')).toBeTruthy();
    expect(screen.getByText('Segunda noticia')).toBeTruthy();
    expect(screen.getAllByRole('article').length).toBe(2);
  });

  it('muestra un mensaje si la lista está vacía', async () => {
    simularFetch({ demo: [] });
    render(<SeccionNoticias id="n" titulo="Noticias" archivo="demo" />);
    expect(await screen.findByText('Aún no hay noticias.')).toBeTruthy();
  });

  it('muestra un error si el archivo no existe (404)', async () => {
    simularFetch({});
    render(<SeccionNoticias id="n" titulo="Noticias" archivo="no-existe" />);
    expect((await screen.findByRole('alert')).textContent).toContain('No se pudieron cargar');
  });

  it('formatearFecha entrega la fecha en español', () => {
    expect(formatearFecha('2026-10-01')).toContain('octubre');
  });
});
