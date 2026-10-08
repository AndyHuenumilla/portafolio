import { useEffect, useState } from 'react';
import { cargarJSON } from './datos';

// Hook personalizado: carga un JSON y entrega { datos, cargando, error }.
// El estado (state) cambia cuando llegan los datos y React vuelve a dibujar el componente.
export function useDatos(nombre) {
  const [datos, setDatos] = useState(null);
  const [cargando, setCargando] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    let activo = true;
    setCargando(true);
    cargarJSON(nombre)
      .then((resultado) => {
        if (activo) setDatos(resultado);
      })
      .catch((e) => {
        if (activo) setError(e.message);
      })
      .finally(() => {
        if (activo) setCargando(false);
      });
    return () => {
      activo = false;
    };
  }, [nombre]);

  return { datos, cargando, error };
}
