# TP - Seguridad e Integridad de Sistemas

## Propuesta de trabajo 1

+ [Ejemplo de un Ataque XSS](https://emilianosalcedo.github.io/tp-seis/src/xss/index.html)

Un atacante podría insertar el siguiente script en el campo de comentarios:

`<script>alert('Prueba de XSS');</script>`

 + [Mitigacion XSS](https://emilianosalcedo.github.io/tp-seis/src/xss/mitigacion.html)

+ [Ejemplo de Open Redirect](https://emilianosalcedo.github.io/tp-seis/src/or/index.html)

Se puede manipular el parámetro `redirectTo` para realizar una redirección.
 
[](https://emilianosalcedo.github.io/tp-seis/src/or/index.html?redirectTo=https://www.google.com/)

Hacer click en _Confirmar Registro_ y se redireccionará manualmente a la URL que se desee.

 + [Mitigacion Open Redirect](https://emilianosalcedo.github.io/tp-seis/src/or/mitigacion.html)

+ [Ejemplo de Bussines Logic Abuse](https://emilianosalcedo.github.io/tp-seis/src/bla/index.html)

Utilizar los cupones `DESCUENTO10` y/o `DESCUENTO20` múltiples veces.

 + [Mitigacion BLA](https://emilianosalcedo.github.io/tp-seis/src/bla/mitigacion.html)
