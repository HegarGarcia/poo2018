function sumRnd (a, b) {

    let i = a < b ? a : b,
        f = a < b ? b : a,
        suma = 0;
    
    for (i; i <= f; i++) 
        suma += Math.floor(Math.random() * b) + a;
    

}

console.log(sumRnd(0, 10));