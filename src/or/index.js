/**
 * Manejo de redireccion
 */
document.getElementById('redireccion').addEventListener('click', (event) => {
  event.preventDefault();
  let redirectTo = obtenerParametro('redirectTo');

  if (redirectTo) {
    // Redirigir a la URL obtenida
    window.location.href = redirectTo;
  }
  else {
    // Por defecto, redirigir a la pagina de confirmacion
    window.location.href = 'confirmado.html?redirectTo=confirmado.html&status=CONFIRMADO&email=usuario@ejemplo.com';
  }

  event.preventDefault();
});

/**
 * Habilitacion de parametros
 */
function obtenerParametro(nombre, url) {
  nombre = nombre.replace(/[\[\]]/g, '\\$&');
  let regex = new RegExp('[?&]' + nombre + '(=([^&#]*)|&|#|$)');

  if (!url) {
    url = window.location.href;
  }

  let resultados = regex.exec(url);

  if (!resultados) {
    return null;
  }

  if (!resultados[2]) {
    return '';
  }

  return decodeURIComponent(resultados[2].replace(/\+/g, ' '));
}
