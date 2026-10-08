# Mi Portafolio

Portafolio personal hecho con **React + Vite**, **Bootstrap / React Bootstrap**, datos en **archivos JSON** y pruebas unitarias con **Jasmine + Karma**.
Evaluación de Desarrollo Fullstack II (DSY1104).

## Requisitos

- Node.js 20 o superior
- Google Chrome (lo usa Karma para ejecutar las pruebas)

## Instalación y uso

```bash
npm install        # instala las dependencias (solo la primera vez)
npm run dev        # abre el sitio en http://localhost:5173
npm test           # ejecuta las pruebas y genera el informe de cobertura
npm run build      # genera la versión final en la carpeta dist
```

El informe de cobertura queda en `coverage/index.html` (ábrelo con el navegador).

## Cómo personalizarlo

| Quiero cambiar... | Archivo |
|---|---|
| Mi nombre, título, biografía y foto | `public/data/perfil.json` |
| Mis proyectos | `public/data/proyectos.json` |
| Las noticias | `public/data/noticias-tecnologia.json` y `public/data/noticias-carrera.json` |
| Mi foto y las imágenes | carpeta `public/img/` |
| Colores y tipografías | `src/index.css` (variables al inicio) |
| Nombre del pie de página | `src/App.jsx` |

No necesitas tocar el código para cambiar el contenido: edita los JSON, guarda y el sitio se actualiza.

## Estructura

```
src/
  components/     componentes (cada uno con su archivo .spec.jsx de pruebas)
  servicios/      lectura de JSON (datos.js) y hook useDatos
  pruebas/        ayudas para simular (mock) fetch en las pruebas
  App.jsx         arma la página completa
public/data/      archivos JSON
public/img/       imágenes
karma.conf.cjs    configuración de Karma + webpack + cobertura
PLAN_DE_PRUEBAS.md
```

## Pruebas

Ver [PLAN_DE_PRUEBAS.md](PLAN_DE_PRUEBAS.md). Cobertura actual: más de 95 % en líneas y sentencias.

## Publicación en GitHub Pages

1. Sube el proyecto a un repositorio de GitHub (rama `main`).
2. En GitHub: **Settings > Pages > Source: GitHub Actions**.
3. Cada `git push` ejecuta las pruebas, compila y publica el sitio.

## Capturas de pantalla

Agrega aquí una captura de escritorio y una de celular de tu sitio publicado.
