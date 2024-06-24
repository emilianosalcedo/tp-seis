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

    if (!esRutaSegura(rutaArchivo)) {
      mostrarMensaje('Error: Ruta no válida.');
      return;
    }

    // Simulacion de gestion de archivos disponibles
    const archivosDisponibles = {
      'documentos/factura.pdf': 'documentos/factura.pdf',
      'archivos/config.txt': 'archivos/config.txt'
    };

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

function esRutaSegura(ruta) {
  // Evitar que la ruta contenga '/../' o termine en '..'
  return !ruta.includes('/../') && !ruta.endsWith('..');
}
