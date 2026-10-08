import { Badge, Card } from 'react-bootstrap';

/**
 * Tarjeta reutilizable de un proyecto. Recibe todo por props:
 * titulo, descripcion, tecnologias (lista), imagen y enlace.
 */
function ProyectoCard({ titulo, descripcion, tecnologias = [], imagen, enlace }) {
  return (
    <Card className="h-100 tarjeta">
      <Card.Img variant="top" src={imagen} alt={`Vista previa del proyecto ${titulo}`} />
      <Card.Body className="d-flex flex-column">
        <Card.Title as="h3">{titulo}</Card.Title>
        <Card.Text>{descripcion}</Card.Text>
        <div className="mb-3" aria-label="Tecnologías utilizadas">
          {tecnologias.map((tec) => (
            <Badge key={tec} bg="light" text="dark" className="me-1 etiqueta">
              {tec}
            </Badge>
          ))}
        </div>
        <a
          href={enlace}
          target="_blank"
          rel="noreferrer"
          className="btn btn-primary btn-primario mt-auto"
        >
          Ver proyecto
        </a>
      </Card.Body>
    </Card>
  );
}

export default ProyectoCard;
