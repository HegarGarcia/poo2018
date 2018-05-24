function sumCube (f) {
    
    if (f < 0)
        throw "El número debe ser mayor a 0";
    
    let suma = 0;

    for (let i = 0; i <= f; i++) {
        suma += Math.pow(i, 3);
    }

    return suma;
}

console.log(sumCube(10));