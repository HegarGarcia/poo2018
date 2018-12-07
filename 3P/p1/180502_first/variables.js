let h = Number(prompt("Metros: "));
let w = Number(prompt("Kilogramos: "));

if (isNaN(h) || isNaN(w)) {
    alert("Valor dado incopatible");
} else {
    alert(`Índice de masa corporal ${w / (h * h)}`);
}

window.location.replace("//localhost:8000/");
