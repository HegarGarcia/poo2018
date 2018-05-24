function sumMultDeTres (a, b) {

    let i = a < b ? a : b,
        f = a < b ? b : a,
        suma = 0;
    
    for (i; i <= f; i++) {

        if (i % 3 == 0) {
            suma += i;
            console.log(`${i} - ${suma}`);
        }

    }

    return suma;
}

console.log(sumMultDeTres(6, 21));