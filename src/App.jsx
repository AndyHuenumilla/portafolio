import ContactoForm from './components/ContactoForm';
import Introduccion from './components/Introduccion';
import Navegacion from './components/Navegacion';
import Pie from './components/Pie';
import Proyectos from './components/Proyectos';
import SeccionNoticias from './components/SeccionNoticias';

const enlaces = [
  { href: '#inicio', texto: 'Sobre mí' },
  { href: '#proyectos', texto: 'Proyectos' },
  { href: '#noticias-tecnologia', texto: 'Tecnología' },
  { href: '#noticias-carrera', texto: 'Carrera' },
  { href: '#contacto', texto: 'Contacto' },
];

function App() {
  return (
    <>
      <a className="salto" href="#contenido">Saltar al contenido</a>
      <Navegacion marca="Mi Portafolio" enlaces={enlaces} />
      <main id="contenido">
        <Introduccion />
        <Proyectos />
        <SeccionNoticias id="noticias-tecnologia" titulo="Noticias de tecnología" archivo="noticias-tecnologia" />
        <SeccionNoticias id="noticias-carrera" titulo="Noticias de la carrera" archivo="noticias-carrera" />
        <ContactoForm
          onEnviar={({ nombre, email, mensaje }) => {
            const asunto = encodeURIComponent(`Mensaje de ${nombre} desde tu portafolio`);
            const cuerpo = encodeURIComponent(`${mensaje}\n\nResponder a: ${email}`);
            window.location.href = `mailto:an.huenumilla@duocuc.cl?subject=${asunto}&body=${cuerpo}`;
          }}
        />
      </main>
      <Pie nombre="Andrea" />
    </>
  );
}

export default App;
