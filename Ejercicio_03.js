let temperatura = parseFloat(prompt("Ingresa la temperatura:"));

let opcion = prompt(
  "Selecciona la conversión:\n" +
  "1. Celsius a Fahrenheit\n" +
  "2. Fahrenheit a Celsius"
);

if (opcion === "1") {
    let resultado = (temperatura * 9 / 5) + 32;
    console.log(temperatura + " °C = " + resultado.toFixed(2) + " °F");
} 
else if (opcion === "2") {
    let resultado = (temperatura - 32) * 5 / 9;
    console.log(temperatura + " °F = " + resultado.toFixed(2) + " °C");
} 
else {
    console.log("Opción no válida.");
}