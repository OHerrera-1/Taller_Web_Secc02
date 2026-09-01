class ProductoQuemado {
  constructor() {
    this.nombre = "Mouse";
    this.precio = 25;
    this.stock = 10;
  }

  mostrarInfo() {
    console.log(`Producto: ${this.nombre}`);
    console.log(`Precio: $${this.precio}`);
    console.log(`Stock: ${this.stock} unidades`);
  }
}

const productoA = new ProductoQuemado();
productoA.mostrarInfo();