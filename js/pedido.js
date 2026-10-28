// Pedidos

// Catálogo: array de objetos
const platos = [
  { id: 1, nombre: "Oklahoma Doble", precio: 26000, categoria: "hamburguesas" },
  { id: 2, nombre: "Pollo Apanado", precio: 24000, categoria: "hamburguesas" },
  { id: 3, nombre: "Brocheta de camarones", precio: 35000, categoria: "brochetas" },
  { id: 4, nombre: "Mazorcada", precio: 35000, categoria: "platos fuertes" },
];

//1. Agregar platos al pedido

const pedido = [];

function agregarPlato(id) {
  for (let plato of platos) {
    if (id === plato.id) {
      pedido.push(plato);
    }
  }
}

agregarPlato(1);
agregarPlato(4);
agregarPlato(3);
console.log(pedido);

//2. Quitar platos del pedido

function quitarPlatos(id) {
  for (let i = 0; i < pedido.length; i++) {
    if (pedido[i].id === id) {
      pedido.splice(i, 1);
      break;
    }
  }
}

quitarPlatos(4);
console.log(pedido);
//console.log(`Total: $${calcularTotal()}`);

//3. Calcular el total

function calcularTotal() {
  let total = 0;
  for (const { precio } of pedido) {
    total += precio;
  }
  return total;
}

console.log(`Total: $${calcularTotal()}`);

//4. Mostrar pedido

function mostrarPedido() {
  for (const { nombre, precio, categoria } of pedido) {
    console.log(`${nombre} - $${precio} - ${categoria}`);
  }
  console.log(`Total: $${calcularTotal()}`);
}

mostrarPedido();
