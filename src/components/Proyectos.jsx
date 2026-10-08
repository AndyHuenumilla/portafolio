import { Col, Container, Row } from 'react-bootstrap';
import { useDatos } from '../servicios/useDatos';
import ProyectoCard from './ProyectoCard';

/** Lista de proyectos en una cuadrícula: 1 columna en celular, 2 en tablet, 3 en escritorio */
function Proyectos() {
  const { datos: proyectos, cargando, error } = useDatos('proyectos');

  return (
    <section id="proyectos" className="seccion">
      <Container>
        <h2>Proyectos</h2>
        {cargando && <p role="status">Cargando proyectos…</p>}
        {error && <p role="alert">No se pudieron cargar los proyectos.</p>}
        <Row xs={1} md={2} lg={3} className="g-4">
          {proyectos &&
            proyectos.map((proyecto) => (
              <Col key={proyecto.id}>
                <ProyectoCard {...proyecto} />
              </Col>
            ))}
        </Row>
      </Container>
    </section>
  );
}

export default Proyectos;
