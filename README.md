# TP - Seguridad e Integridad de Sistemas

## Propuesta de trabajo 1

+ [Ejemplo de un Ataque XSS](https://emilianosalcedo.github.io/tp-seis/src/xss/index.html)

1. Ingresar a la publicación del blog.
2. Posicionarse en el input de comentarios.
3. Ingresar una inyección de script como: `<script>alert('¡Hola Mundo!');</script>`
4. Hacer click en _Enviar_

[Mitigacion XSS](https://emilianosalcedo.github.io/tp-seis/src/xss/mitigacion.html)

Se mitiga tratando el user input como texto plano.

---

+ [Ejemplo de Open Redirect](https://emilianosalcedo.github.io/tp-seis/src/or/index.html)

1. Ingresar en: https://emilianosalcedo.github.io/tp-seis/src/or/index.html
2. Modificar la URL y agregar el parametro `?redirecTo=https://www.google.com`.
3. La URL debería quedar de la siguiente manera: https://emilianosalcedo.github.io/tp-seis/src/or/index.html?redirectTo=https://www.google.com
4. Presionar _Enter_ posicionado en la barra de navegación.
5. Hacer click en _Confirmar Registro_ y se redireccionará manualmente a la URL que se desee (en este casoo https://www.google.com).

[Mitigacion Open Redirect](https://emilianosalcedo.github.io/tp-seis/src/or/mitigacion.html)

Se validan redirecciones hacia sitios válidos.

---

+ [Ejemplo de Bussines Logic Abuse](https://emilianosalcedo.github.io/tp-seis/src/bla/index.html)

1. En el carrito de compras ingresar un cupón válido (`DESCUENTO10` o `DESCUENTO20`).
2. Aplicar los mismos cupones más de una ocasión.
3. Se puede repetir el proceso múltiples veces.

[Mitigacion BLA](https://emilianosalcedo.github.io/tp-seis/src/bla/mitigacion.html)

Se agrega un estado de la apliicación del cupón para validar que no haya repeticiones en la misma.
