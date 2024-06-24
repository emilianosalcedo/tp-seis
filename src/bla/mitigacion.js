var descuentos = {
  'DESCUENTO10': 10,
  'DESCUENTO20': 20
};

var aplicado = false;

document.getElementById('formDescuento').addEventListener('submit', (event) => {
  event.preventDefault();

  if (aplicado) {
    alert('Solo se puede aplicar un código de descuento por transacción.');
    return;
  }

  let codigo = document.getElementById('codigoDescuento').value;

  if (descuentos[codigo]) {
    aplicarDescuento(descuentos[codigo]);
    aplicado = true;
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
