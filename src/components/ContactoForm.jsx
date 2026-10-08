import { useState } from 'react';
import { Button, Container, Form } from 'react-bootstrap';

/** Valida el formulario y devuelve un objeto con los errores encontrados (vacío si todo está bien) */
export function validarContacto({ nombre, email, mensaje }) {
  const errores = {};
  if (nombre.trim().length < 2) errores.nombre = 'Escribe tu nombre (mínimo 2 letras).';
  if (!/^\S+@\S+\.\S+$/.test(email)) errores.email = 'Escribe un correo válido, por ejemplo nombre@correo.cl.';
  if (mensaje.trim().length < 10) errores.mensaje = 'El mensaje debe tener al menos 10 caracteres.';
  return errores;
}

/**
 * Formulario controlado (cada campo vive en el state).
 * Prop: onEnviar(datos) se llama solo si no hay errores.
 */
function ContactoForm({ onEnviar }) {
  const [campos, setCampos] = useState({ nombre: '', email: '', mensaje: '' });
  const [errores, setErrores] = useState({});
  const [enviado, setEnviado] = useState(false);

  const cambiar = (evento) => {
    const { name, value } = evento.target;
    setCampos((anterior) => ({ ...anterior, [name]: value }));
    setEnviado(false);
  };

  const enviar = (evento) => {
    evento.preventDefault();
    const encontrados = validarContacto(campos);
    setErrores(encontrados);
    if (Object.keys(encontrados).length === 0) {
      if (onEnviar) onEnviar(campos);
      setEnviado(true);
      setCampos({ nombre: '', email: '', mensaje: '' });
    }
  };

  return (
    <section id="contacto" className="seccion">
      <Container>
        <h2>Contacto</h2>
        <Form onSubmit={enviar} noValidate className="formulario">
          <Form.Group className="mb-3" controlId="nombre">
            <Form.Label>Nombre</Form.Label>
            <Form.Control name="nombre" value={campos.nombre} onChange={cambiar} isInvalid={!!errores.nombre} />
            <Form.Control.Feedback type="invalid">{errores.nombre}</Form.Control.Feedback>
          </Form.Group>
          <Form.Group className="mb-3" controlId="email">
            <Form.Label>Correo</Form.Label>
            <Form.Control type="email" name="email" value={campos.email} onChange={cambiar} isInvalid={!!errores.email} />
            <Form.Control.Feedback type="invalid">{errores.email}</Form.Control.Feedback>
          </Form.Group>
          <Form.Group className="mb-3" controlId="mensaje">
            <Form.Label>Mensaje</Form.Label>
            <Form.Control as="textarea" rows={4} name="mensaje" value={campos.mensaje} onChange={cambiar} isInvalid={!!errores.mensaje} />
            <Form.Control.Feedback type="invalid">{errores.mensaje}</Form.Control.Feedback>
          </Form.Group>
          <Button type="submit" className="btn-primario">
            Enviar mensaje
          </Button>
          {enviado && (
            <p role="status" className="mt-3 exito">
              Mensaje enviado. ¡Gracias por escribir!
            </p>
          )}
        </Form>
      </Container>
    </section>
  );
}

export default ContactoForm;
