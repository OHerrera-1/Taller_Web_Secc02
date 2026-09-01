var nota = 85;

if (nota >= 90 && nota <= 100) {
    alert("Excelente");
} else if (nota >= 80 && nota <= 89) {
    alert("Muy Bueno");
} else if (nota >= 70 && nota <= 79) {
    alert("Bueno");
} else if (nota >= 60 && nota <= 69) {
    alert("Regular");
} else if (nota < 60 && nota >= 0) {
    alert("Reprobado");
} else {
    alert("Nota inválida. Debe estar entre 0 y 100.");
}