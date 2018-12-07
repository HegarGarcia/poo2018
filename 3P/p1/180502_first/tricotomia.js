let a = Number(prompt("Un número: "));
let b = Number(prompt("Otro número: "));

if (isNaN(a) || isNaN(b)) {
    alert("Valores no válidos");
} else if (a < b) {
    alert(`${a} < ${b}`);
} else if (a > b) {
    alert(`${a} > ${b}`);
} else {
    alert(`${a} = ${b}`);
}

window.location.replace("//localhost:8000/");
