import { Col, Container, Image, Row } from 'react-bootstrap';
import { useDatos } from '../servicios/useDatos';

/** Sección "Sobre mí": foto, nombre y biografía leídos desde perfil.json */
function Introduccion() {
  const { datos: perfil, cargando, error } = useDatos('perfil');

  return (
    <header id="inicio" className="seccion intro">
      <Container>
        {cargando && <p role="status">Cargando perfil…</p>}
        {error && <p role="alert">No se pudo cargar el perfil. Revisa public/data/perfil.json.</p>}
        {perfil && (
          <Row className="align-items-center g-4">
            <Col xs={12} md={4} className="text-center">
              <Image
                src={perfil.foto}
                alt={`Foto de ${perfil.nombre}`}
                roundedCircle
                fluid
                className="foto"
              />
            </Col>
            <Col xs={12} md={8}>
              <h1>{perfil.nombre}</h1>
              <p className="subtitulo">{perfil.titulo}</p>
              <p>{perfil.biografia}</p>
              <a className="btn btn-primario" href="#contacto">
                Escríbeme
              </a>
            </Col>
          </Row>
        )}
      </Container>
    </header>
  );
}

export default Introduccion;
