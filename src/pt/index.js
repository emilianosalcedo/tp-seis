document.addEventListener('DOMContentLoaded', () => {
  const archivoForm = document.getElementById('archivoForm');
  const resultadoDescarga = document.getElementById('resultadoDescarga');

  archivoForm.addEventListener('submit', (event) => {
    event.preventDefault();

    const rutaArchivo = document.getElementById('rutaArchivo').value.trim();

    if (rutaArchivo === '') {
      mostrarMensaje('Error: Debes ingresar una ruta de archivo.');
      return;
    }

    // Simulacion de gestion de archivos disponibles
    const archivosDisponibles = {
      'documentos/factura.pdf': 'documentos/factura.pdf',
      'archivos/config.txt': 'archivos/config.txt'
    };

    // Validar la ruta ingresada
    if (!esRutaValida(rutaArchivo)) {
      mostrarMensaje('Error: Ruta no válida.');
      return;
    }

    // Verificar si la ruta ingresada es un archivo disponible
    if (archivosDisponibles[rutaArchivo]) {
      const rutaDescarga = archivosDisponibles[rutaArchivo];
      mostrarMensaje(`Descargando archivo: ${rutaDescarga}`);
    }
    else {
      mostrarMensaje('Error: Acceso denegado o archivo no encontrado.');
    }
  });

});

function mostrarMensaje(mensaje) {
  resultadoDescarga.textContent = mensaje;
  resultadoDescarga.style.display = 'block';
}

function esRutaValida(ruta) {
  // Permitir rutas que contengan '../' pero no permitir '/../' ni rutas que terminen en '..'
  return !ruta.includes('/../') && !ruta.endsWith('..');
}
