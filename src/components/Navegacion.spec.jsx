import { fireEvent, render, screen } from '@testing-library/react';
import Navegacion from './Navegacion';

describe('Navegacion', () => {
  const enlaces = [
    { href: '#proyectos', texto: 'Proyectos' },
    { href: '#contacto', texto: 'Contacto' },
  ];

  it('muestra la marca y un enlace por cada elemento', () => {
    render(<Navegacion marca="Mi Portafolio" enlaces={enlaces} />);
    expect(screen.getByText('Mi Portafolio')).toBeTruthy();
    expect(screen.getByText('Proyectos').getAttribute('href')).toBe('#proyectos');
    expect(screen.getByText('Contacto').getAttribute('href')).toBe('#contacto');
  });

  it('el botón del menú móvil cambia de estado al hacer clic', () => {
    render(<Navegacion marca="Mi Portafolio" enlaces={enlaces} />);
    const boton = screen.getByLabelText('Abrir menú');
    // "collapsed" significa que el menú está cerrado
    expect(boton.classList.contains('collapsed')).toBe(true);
    fireEvent.click(boton);
    expect(boton.classList.contains('collapsed')).toBe(false);
  });
});
