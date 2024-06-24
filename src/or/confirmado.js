/**
 * Manejar los parametros en confirmado.html
 */
document.addEventListener('DOMContentLoaded', () => {
  let params = parametros();

  if (params) {
    let status = params.status || '';
    let email = params.email || '';

    let statusElement = document.createElement('p');
    statusElement.textContent = 'Estado: ' + status;
    document.body.appendChild(statusElement);

    let emailElement = document.createElement('p');
    emailElement.textContent = 'Correo electronico: ' + email;
    document.body.appendChild(emailElement);
  }
});

/**
 * Obtener parametros de la URL
 */
function parametros() {
  let urlParams = new URLSearchParams(window.location.search);
  let params = {};

  for (const [key, value] of urlParams) {
    params[key] = value;
  }

  return params;
}
