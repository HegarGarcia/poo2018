function suma (a, b) {
    let i = a < b ? a : b,
        f = a < b ? b : a,
        suma = 0;

    while (i <= f) {
        suma += i;
        i++;
    }

    return suma;
}

let a = 15,
    b = 5;

console.log(suma(a, b));
console.log(suma(b, a));
console.log('Done...');