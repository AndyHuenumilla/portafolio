import { Container, Nav, Navbar } from 'react-bootstrap';

/**
 * Barra de navegación responsiva (se pliega en un menú en pantallas pequeñas).
 * Props: marca (texto de la izquierda), enlaces ([{ href, texto }]).
 */
function Navegacion({ marca, enlaces }) {
  return (
    <Navbar expand="md" className="barra" sticky="top" collapseOnSelect>
      <Container>
        <Navbar.Brand href="#inicio">{marca}</Navbar.Brand>
        <Navbar.Toggle aria-controls="menu-principal" label="Abrir menú" />
        <Navbar.Collapse id="menu-principal">
          <Nav className="ms-auto">
            {enlaces.map((enlace) => (
              <Nav.Link key={enlace.href} href={enlace.href}>
                {enlace.texto}
              </Nav.Link>
            ))}
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Navegacion;
