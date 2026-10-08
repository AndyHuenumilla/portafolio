import { render, screen } from '@testing-library/react';
import Pie from './Pie';

describe('Pie', () => {
  it('muestra el nombre y el año recibidos', () => {
    render(<Pie nombre="Ana" anio={2026} />);
    expect(screen.getByText(/2026 Ana/)).toBeTruthy();
  });

  it('usa el año actual por defecto', () => {
    render(<Pie nombre="Ana" />);
    expect(screen.getByText(new RegExp(String(new Date().getFullYear())))).toBeTruthy();
  });
});
