// Pedidos

import { platos } from "./catalogo.js";
//1. Agregar platos al pedido

export class Pedido {
  constructor() {
    this.items = [];
  }

  agregarPlato(id) {
    for (let plato of platos) {
      // Recorre plato por plato de la lista de catalogo
      if (id === plato.id) {
        // Si el id que recibio esta funcion es igual al id de este producto
        this.items.push(plato); // Entonces agrega ese producto (objeto completo) al carrito
        return; // sale de toda la funcion: ya se agrego, no hay qie seguir
      }
    }
    throw new Error(`El producto con id ${id} no existe`); // throw: lanza un error y detiene la función. new Error crea el error con su mensaje.
  }

  quitarPlatos(id) {
    for (let i = 0; i < this.items.length; i++) {
      if (this.items[i].id === id) {
        this.items.splice(i, 1);
        break;
      }
    }
  }

  calcularTotal() {
    let total = 0;
    for (const { precio } of this.items) {
      total += precio;
    }
    return total;
  }

  mostrarPedido() {
    this.items.forEach(({ nombre, precio, categoria }) => {
      console.log(`${nombre} - $${precio} - ${categoria}`);
    });

    console.log(`Total: $${this.calcularTotal()}`);
  }
}
