// Ayudas compartidas por las pruebas: simulan (mock) las respuestas de fetch.
export function respuestaJSON(datos, ok = true, status = 200) {
  return Promise.resolve({ ok, status, json: () => Promise.resolve(datos) });
}

// Reemplaza window.fetch por un espía que responde según el archivo pedido.
// Jasmine lo restaura solo al terminar cada prueba.
export function simularFetch(archivos) {
  return spyOn(window, 'fetch').and.callFake((url) => {
    const nombre = Object.keys(archivos).find((n) => url.includes(`${n}.json`));
    return nombre ? respuestaJSON(archivos[nombre]) : respuestaJSON({}, false, 404);
  });
}
