# Plan de pruebas

Herramientas: Jasmine (escribe las pruebas), Karma (las ejecuta en Chrome sin ventana), @testing-library/react (dibuja los componentes), karma-coverage + istanbul (cobertura).
Comando: `npm test`

## Casos de prueba

| Componente / módulo | Caso | Resultado esperado |
|---|---|---|
| ProyectoCard | Recibe título y descripción por props | Se muestran en pantalla |
| ProyectoCard | Recibe lista de tecnologías | Una etiqueta por tecnología |
| ProyectoCard | Imagen del proyecto | Tiene texto alternativo (alt) |
| ProyectoCard | Botón "Ver proyecto" | Enlaza a la URL y abre en otra pestaña |
| ProyectoCard | No recibe tecnologías | No falla (valor por defecto) |
| Navegacion | Recibe marca y enlaces | Muestra la marca y un enlace por elemento |
| Navegacion | Clic en el botón del menú móvil | El botón cambia de cerrado a abierto |
| ContactoForm | Datos válidos | validarContacto no devuelve errores |
| ContactoForm | Nombre corto, correo inválido, mensaje corto | Devuelve un error por campo |
| ContactoForm | Escribir en un campo | El valor se actualiza (state) |
| ContactoForm | Enviar formulario vacío | Muestra errores y NO llama a onEnviar |
| ContactoForm | Enviar datos válidos | Llama a onEnviar con los datos y muestra confirmación |
| ContactoForm | Después de enviar | Los campos quedan vacíos |
| SeccionNoticias | Mientras carga | Muestra "Cargando" |
| SeccionNoticias | JSON cargado | Pide ./data/<archivo>.json y dibuja una noticia por elemento |
| SeccionNoticias | JSON vacío | Muestra "Aún no hay noticias." |
| SeccionNoticias | Archivo no existe (404) | Muestra mensaje de error |
| SeccionNoticias | formatearFecha | Devuelve la fecha en español |
| Proyectos | JSON con 3 proyectos | Dibuja 3 tarjetas |
| Proyectos | Falla la carga | Muestra mensaje de error |
| Introduccion | JSON de perfil | Muestra nombre, biografía y foto con alt |
| Introduccion | Falla la carga | Muestra mensaje de error |
| Pie | Con y sin año | Muestra el año recibido o el actual |
| cargarJSON | Respuesta correcta | Devuelve el contenido del JSON |
| cargarJSON | Respuesta con falla | Lanza un error con el código |
| App (integración) | Carga completa | Muestran perfil, proyectos, dos noticias y contacto |
| App (integración) | Accesibilidad | Existe el enlace "Saltar al contenido" |

## Mocks

Las pruebas no leen archivos reales: `simularFetch` (en `src/pruebas/ayudas.js`) reemplaza `window.fetch` con un espía de Jasmine (`spyOn`) que devuelve datos de prueba o un error 404. Así las pruebas son rápidas y no dependen de la red. En ContactoForm se usa `jasmine.createSpy` para comprobar que `onEnviar` se llama (o no).

## Resultados

29 pruebas, 29 correctas. Cobertura: sentencias 98.6 %, ramas 97.9 %, funciones 96.7 %, líneas 98.3 %.
Informe detallado: `coverage/index.html` (se genera con `npm test`).
