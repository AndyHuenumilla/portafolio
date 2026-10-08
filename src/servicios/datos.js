// Lee un archivo JSON de la carpeta public/data y devuelve su contenido.
// Ejemplo: cargarJSON('proyectos') lee ./data/proyectos.json
export async function cargarJSON(nombre) {
  const respuesta = await fetch(`./data/${nombre}.json`);
  if (!respuesta.ok) {
    throw new Error(`No se pudo cargar ${nombre}.json (${respuesta.status})`);
  }
  return respuesta.json();
}
