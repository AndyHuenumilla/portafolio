import { Container } from 'react-bootstrap';

function Pie({ nombre, anio = new Date().getFullYear() }) {
  return (
    <footer className="pie">
      <Container>
        <small>
          © {anio} {nombre}. Hecho con React y Bootstrap.
        </small>
      </Container>
    </footer>
  );
}

export default Pie;
