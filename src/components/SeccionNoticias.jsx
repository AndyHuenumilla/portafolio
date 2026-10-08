import { Container, ListGroup } from 'react-bootstrap';
import { useDatos } from '../servicios/useDatos';

/** Formatea "2026-10-01" como "1 de octubre de 2026" */
export function formatearFecha(texto) {
  const fecha = new Date(`${texto}T12:00:00`);
  return fecha.toLocaleDateString('es-CL', { day: 'numeric', month: 'long', year: 'numeric' });
}

/**
 * Sección de noticias reutilizable. Se usa dos veces en la página:
 * cada una recibe un título y el nombre de su archivo JSON.
 */
function SeccionNoticias({ id, titulo, archivo }) {
  const { datos: noticias, cargando, error } = useDatos(archivo);

  return (
    <section id={id} className="seccion">
      <Container>
        <h2>{titulo}</h2>
        {cargando && <p role="status">Cargando noticias…</p>}
        {error && <p role="alert">No se pudieron cargar las noticias.</p>}
        {noticias && noticias.length === 0 && <p>Aún no hay noticias.</p>}
        <ListGroup variant="flush">
          {noticias &&
            noticias.map((noticia) => (
              <ListGroup.Item key={noticia.id} as="article" className="noticia">
                <h3>{noticia.titulo}</h3>
                <time dateTime={noticia.fecha}>{formatearFecha(noticia.fecha)}</time>
                <p>{noticia.contenido}</p>
              </ListGroup.Item>
            ))}
        </ListGroup>
      </Container>
    </section>
  );
}

export default SeccionNoticias;
