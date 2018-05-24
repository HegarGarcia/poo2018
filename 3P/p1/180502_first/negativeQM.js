let n = Number(prompt("Número: "));

if (isNaN(n)) {
    alert("Valor ingresado no es un número");
} else if (n >= 0) {
    alert("El número es positivo");
} else {
    alert("El número es negativo")
}

window.location.replace("//localhost:8000/");

