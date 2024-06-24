var descuentos = {
  'DESCUENTO10': 10,
  'DESCUENTO20': 20
};

document.getElementById('formDescuento').addEventListener('submit', (event) => {
  event.preventDefault();
  let codigo = document.getElementById('codigoDescuento').value;

  if (descuentos[codigo]) {
    aplicarDescuento(descuentos[codigo]);
    document.getElementById('codigoDescuento').value = '';
  }
  else {
    alert('Código de descuento no válido.');
  }
});

function aplicarDescuento(descuento) {
  let totalElemento = document.getElementById('total');
  let total = parseFloat(totalElemento.textContent);
  let nuevoTotal = total - descuento;
  totalElemento.textContent = nuevoTotal.toFixed(2);
}
