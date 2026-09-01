let numero1 = parseFloat(prompt("Ingresa el primer numero:"));
let numero2 = parseFloat(prompt("Ingresa el segundo numero:"));

let opcion = prompt(
    "MENU DE OPERACIONES\n" +
    "1. Suma\n" +
    "2. Resta\n" +
    "3. Multiplicacion\n" +
    "4. Division\n\n" +
    "Selecciona una opcion:"
);

let resultado;

switch (opcion) {
    case "1":
        resultado = numero1 + numero2;
        console.log("Resultado de la suma: " + resultado);
        break;

    case "2":
        resultado = numero1 - numero2;
        console.log("Resultado de la resta: " + resultado);
        break;

    case "3":
        resultado = numero1 * numero2;
        console.log("Resultado de la multiplicación: " + resultado);
        break;

    case "4":
        if (numero2 !== 0) {
            resultado = numero1 / numero2;
            console.log("Resultado de la division: " + resultado);
        } else {
            console.log("No se puede dividir entre cero.");
        }
        break;

    default:
        console.log("Opcion no valida.");
}