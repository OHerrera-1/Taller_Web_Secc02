var nombre = prompt("Ingrese el nombre del producto:");
var precio = parseFloat(prompt("Ingrese el precio del producto:"));
var descuento = parseFloat(prompt("Ingrese el porcentaje de descuento (solo número):"));

if (isNaN(precio) || isNaN(descuento)) {
    alert("ERROR: Debe ingresar valores numéricos en precio y descuento.");
} else if (precio < 0 || descuento < 0) {
    alert("ERROR: El precio y el descuento no pueden ser negativos.");
} else {
    var descuentoAplicado = (precio * descuento) / 100;
    var precioFinal = precio - descuentoAplicado;

    alert("Producto: " + nombre + "\n" +
          "Precio original: $" + precio.toFixed(2) + "\n" +
          "Descuento: " + descuento + "%\n" +
          "------------------------\n" +
          "Total a pagar: $" + precioFinal.toFixed(2));
}