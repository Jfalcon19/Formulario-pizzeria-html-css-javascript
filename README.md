Esto es el proyecto final de la asignatura Lenguaje de marcas del grado superior Administrador de sistemas informáticos en red (ASIR) que estoy cursando actualmente (2024-2025), consiste en crear un formulario de pedidos para una pizzería,
el siguiente texto es el enunciado del proyecto y los requisitos que debía cumplir:

Este proyecto consiste en crear un formulario de pedido de pizza utilizando HTML.También debes diseñar el código en JavaScript, y crear el archivo CSS correspondiente para que el formulario se comporte de acuerdo a las funcionalidades requeridas.

El formulario debe llevar la imagen o logo de la pizzeria y además tres grupos de campos diferenciados:

1º Datos de entrega: con nombre, dirección, teléfono y email como campos obligatorios

2º Tipo de pizza a encargar: sobre la base de tomate y queso, se podrá elegir:

Tamaño: pequeña (5€), mediana (10€) o grande (15€)

Ingredientes adicionales: cebolla (1€), champis (1€), atún (1,5€), pepperoni (1€), bacon (1€), ternera (1,5€)

3º Observaciones (máximo de 200 carácteres): donde el usuario puede introducir si lo desea la hora preferida de entrega y alguna instrucción en la dirección de entrega que crea conveniente.

Además,  al clicar sobre el botón de “Realizar pedido”, debe salir un mensaje con el importe de la pizza encargada.

Requisitos y funcionalidades:
 

Modo claro/oscuro (Evento onclick): Debe haber al principio del formulario un botón "Claro/oscuro" que permita al usuario cambiar entre el modo claro y oscuro del fondo del formulario.
 

Validación del formulario (Evento onsubmit): El usuario no debe poder enviar el formulario si los datos están incompletos o incorrectos. Debes validar:
Email: Debe contener @. 
Teléfono: Debe contener solo números y tener al menos 9 dígitos.

Dirección: Debe tener al menos 5 caracteres.

Campos obligatorios no pueden estar en blanco.
Si hay errores, debe mostrarse un mensaje al usuario y evitar el envío (event.preventDefault()).

 

Visualización en tiempo real de caracteres que se escriben en "Observaciones" (Evento oninput): Si el usuario escribe en este campo, debe mostrarse en tiempo real.
Confirmación antes de enviar el pedido
Antes de enviar, debe mostrarse un mensaje de confirmación con confirm().

Si el usuario acepta, el pedido se envía.

Si el usuario cancela, el formulario no se envía.

Cálculo del precio del pedido
El usuario selecciona el tamaño de la pizza y los ingredientes adicionales.

Cada tamaño y cada ingrediente tiene un precio.

El total debe calcularse automáticamente y mostrarse en la página.

Cambio de color en los ingredientes al pasar el ratón (evento mouseover y mouseout)
Cuando el usuario pasa el ratón sobre los diferentes ingredientes, debe cambiar de color.

Cuando el ratón sale, debe volver a su color original.

--Restricciones
No escribir código JavaScript dentro del HTML (todo debe estar en Apellido1_Apellido2_pizza.js).

Deberás crear tu propio archivo Apellido1_Apellido2_pizza.css para aplicar los estilos necesarios, incluyendo el modo claro/oscuro y la personalización del formulario.

No uses console.log() ni document.write() para mostrar mensajes (usar alert(), confirm()).
