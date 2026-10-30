import { Pedido } from "./pedido.js";

//-----USO DE LA CLASE----

// new: crea un pedido nuevo a partir del molde Pedido.
// Cada pedido es una INSTANCIA independiente, con su propio items vacío.
// Es como dos clientes en la tienda, cada uno con su pedido.
const pedido1 = new Pedido();
const pedido2 = new Pedido();

// Cada pedido usa SU método agregarPlato con un id del catálogo.
// Lo que se agrega a uno NO aparece en el otro.

pedido1.agregarPlato(1);
pedido2.agregarPlato(2);

// Cada pedido muestra solo SUS productos y SU total.

pedido1.mostrarPedido();
pedido2.mostrarPedido();

// try/catch: qué es -> una estructura para manejar errores.
// Para qué sirve -> que un error no detenga el programa.
try {
  // try: intenta ejecutar el código que puede fallar
  pedido1.agregarPlato(99);
} catch (error) {
  // error: variable (como un parámetro) que recibe el error ATRAPADO.
  // catch: se ejecuta SOLO si hubo un error. error = el error atrapado
  console.log(error.message); // .messsage = el texto que se puso en new Error
}

//-----JSON-----
// Que és: un formato de texto para guardar o enviar datos con la misma forma que los objetos y arrays de JavaScript
// Para que sirve: los datos de JavaScript viven en memoria y se borran al cerrar. Para guardarlos (localStorage, un archivo) o enviarlos (a un servidor), hay que convertirlos en texto.

// -----FUNCIONES-----

const pedidoTexto = JSON.stringify(pedido1.items);
// JSON.stringify(dato) - Objeto o array --> texto - Empacar la caja para enviarla

console.log(typeof pedidoTexto);
console.log(pedidoTexto);

const pedidoRecuperado = JSON.parse(pedidoTexto);
// JSON.parse(texto) - Texto --> objeto o array - Desempacarla al llegar

console.log(typeof pedidoRecuperado);
console.log(pedidoRecuperado);
