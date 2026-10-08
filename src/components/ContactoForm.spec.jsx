import { fireEvent, render, screen } from '@testing-library/react';
import ContactoForm, { validarContacto } from './ContactoForm';

function escribir(etiqueta, valor) {
  fireEvent.change(screen.getByLabelText(etiqueta), { target: { value: valor } });
}

describe('validarContacto (lógica pura)', () => {
  it('no devuelve errores con datos válidos', () => {
    const errores = validarContacto({ nombre: 'Ana', email: 'ana@correo.cl', mensaje: 'Hola, me gusta tu portafolio' });
    expect(Object.keys(errores).length).toBe(0);
  });

  it('detecta nombre corto, correo inválido y mensaje corto', () => {
    const errores = validarContacto({ nombre: 'A', email: 'sin-arroba', mensaje: 'corto' });
    expect(errores.nombre).toBeDefined();
    expect(errores.email).toBeDefined();
    expect(errores.mensaje).toBeDefined();
  });
});

describe('ContactoForm (eventos y estado)', () => {
  it('actualiza el valor del campo al escribir', () => {
    render(<ContactoForm />);
    escribir('Nombre', 'Ana');
    expect(screen.getByLabelText('Nombre').value).toBe('Ana');
  });

  it('muestra errores y NO llama a onEnviar si el formulario es inválido', () => {
    const onEnviar = jasmine.createSpy('onEnviar');
    render(<ContactoForm onEnviar={onEnviar} />);
    fireEvent.click(screen.getByRole('button', { name: 'Enviar mensaje' }));
    expect(screen.getByText('Escribe tu nombre (mínimo 2 letras).')).toBeTruthy();
    expect(onEnviar).not.toHaveBeenCalled();
  });

  it('llama a onEnviar con los datos y muestra confirmación si es válido', () => {
    const onEnviar = jasmine.createSpy('onEnviar');
    render(<ContactoForm onEnviar={onEnviar} />);
    escribir('Nombre', 'Ana');
    escribir('Correo', 'ana@correo.cl');
    escribir('Mensaje', 'Hola, me gusta tu portafolio');
    fireEvent.click(screen.getByRole('button', { name: 'Enviar mensaje' }));
    expect(onEnviar).toHaveBeenCalledWith({
      nombre: 'Ana',
      email: 'ana@correo.cl',
      mensaje: 'Hola, me gusta tu portafolio',
    });
    expect(screen.getByRole('status').textContent).toContain('Mensaje enviado');
  });

  it('limpia los campos después de enviar', () => {
    render(<ContactoForm />);
    escribir('Nombre', 'Ana');
    escribir('Correo', 'ana@correo.cl');
    escribir('Mensaje', 'Hola, me gusta tu portafolio');
    fireEvent.click(screen.getByRole('button', { name: 'Enviar mensaje' }));
    expect(screen.getByLabelText('Nombre').value).toBe('');
  });
});
