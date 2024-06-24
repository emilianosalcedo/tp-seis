# tp-seis
Propuesta de trabajo 1

https://emilianosalcedo.github.io/tp-seis/

[Ejemplo de un Ataque XSS](https://emilianosalcedo.github.io/tp-seis/src/xss/index.html)

Un atacante podría insertar el siguiente script en el campo de comentarios:

`<script>alert('¡Este es un ataque XSS!');</script>`

[Mitigacion XSS](https://emilianosalcedo.github.io/tp-seis/src/xss/mitigacion.html)

[Ejemplo de Open Redirect](https://emilianosalcedo.github.io/tp-seis/src/or/index.html)

Se puede manipular el parámetro `redirectTo` para realizar una redirección.
 
`https://emilianosalcedo.github.io/tp-seis/src/or/index.html?redirectTo=https://www.google.com/`

Oprimir `Enter` y hacer click en _Confirmar Registro_

[Mitigacion Open Redirect](https://emilianosalcedo.github.io/tp-seis/src/or/mitigacion.html)

[Ejemplo de Bussines Logic Abuse](https://emilianosalcedo.github.io/tp-seis/src/bla/index.html)

Utilizar los cupones `DESCUENTO10` y/o `DESCUENTO20` múltiples veces.

[Mitigacion BLA](https://emilianosalcedo.github.io/tp-seis/src/bla/mitigacion.html)
