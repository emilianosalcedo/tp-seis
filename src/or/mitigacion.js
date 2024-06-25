/**
 * Manejo de redireccion
 */
document.getElementById('redireccion').addEventListener('click', (event) => {
  event.preventDefault();
  let url = window.location.href;
  let redirectTo = obtenerParametro('redirectTo', url);

  if (redirectTo && esLinkValido(redirectTo)) {
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

/**
 * Validar una URL
 */
function esLinkValido(url) {
  let pattern = /^(http:\/\/www\.|https:\/\/www\.|http:\/\/|https:\/\/)?[a-z0-9]+([\-\.]{1}[a-z0-9]+)*\.[a-z]{2,5}(:[0-9]{1,5})?(\/.*)?$/;

  return !pattern.test(url);
}
