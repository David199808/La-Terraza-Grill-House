//----- DOM -----//

import { Pedido } from "./pedido.js";

console.log("¡Restaurante en servicio!"); // Conectado a carta.html
const pedidoNuevo = new Pedido(); // Un solo pedido aqui arriba

const contador = document.querySelector(".menu__contador"); // selecciona el contador (<span> del html)

const botones = document.querySelectorAll(".productos__boton"); // Selecciona todo los botones de la pagina web

botones.forEach((boton) => {
  // capa 1: para cada botón
  boton.addEventListener("click", () => {
    // capa 2: cuando le hagan click
    const id = Number(boton.dataset.id); // "3" (texto) -> 3 (número)
    pedidoNuevo.agregarPlato(id); // tu pedido, no el molde
    console.log(pedidoNuevo.items); //ver que tiene
    contador.textContent = pedidoNuevo.items.length; // Se cuenta cuantos platos hay dentro del pedido, y el Numero se escribe en el menu visual (5) segun cuantos platos se agregue al pedido (DOM: textContent)
    boton.textContent = "✓ Agregado"; // Cambia el texto del boton a "✓ Agregado"
    boton.classList.add("productos__boton--agregado"); // Agregar estilos de esta clase mientras se da click
    setTimeout(() => {
      // funcion que espera cierto tiempo y despues ejecuta un callback
      boton.textContent = "Agregar pedido"; // Cuando se agote el tiempo vuelve y excribe este texto
      boton.classList.remove("productos__boton--agregado"); // Cuando se agote el tiempo remueve esta clase
    }, 1000); // Cuanto esperar en milisegundos
  }); // Cierra el callback del clic y del addEventListener
}); // cierra el callback del forEach y el forEach
