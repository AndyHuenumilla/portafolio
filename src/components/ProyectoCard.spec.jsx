import { render, screen } from '@testing-library/react';
import ProyectoCard from './ProyectoCard';

describe('ProyectoCard', () => {
  const props = {
    titulo: 'TechStore',
    descripcion: 'Tienda online',
    tecnologias: ['HTML5', 'CSS'],
    imagen: './img/proyecto-1.svg',
    enlace: 'https://github.com/demo',
  };

  it('muestra el título y la descripción recibidos por props', () => {
    render(<ProyectoCard {...props} />);
    expect(screen.getByText('TechStore')).toBeTruthy();
    expect(screen.getByText('Tienda online')).toBeTruthy();
  });

  it('muestra una etiqueta por cada tecnología', () => {
    render(<ProyectoCard {...props} />);
    expect(screen.getByText('HTML5')).toBeTruthy();
    expect(screen.getByText('CSS')).toBeTruthy();
  });

  it('la imagen tiene texto alternativo (accesibilidad)', () => {
    render(<ProyectoCard {...props} />);
    const imagen = screen.getByAltText('Vista previa del proyecto TechStore');
    expect(imagen.getAttribute('src')).toBe('./img/proyecto-1.svg');
  });

  it('el botón enlaza al proyecto y abre en otra pestaña', () => {
    render(<ProyectoCard {...props} />);
    const enlace = screen.getByRole('link', { name: 'Ver proyecto' });
    expect(enlace.getAttribute('href')).toBe('https://github.com/demo');
    expect(enlace.getAttribute('target')).toBe('_blank');
  });

  it('funciona sin tecnologías (valor por defecto)', () => {
    const { titulo, descripcion, imagen, enlace } = props;
    render(<ProyectoCard titulo={titulo} descripcion={descripcion} imagen={imagen} enlace={enlace} />);
    expect(screen.getByText('TechStore')).toBeTruthy();
  });
});
