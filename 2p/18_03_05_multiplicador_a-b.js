function multiplier(start, limit) {

    let a = start,
        b = limit,
        total = 1;

    if (start > limit) {
        a = limit;
        b = start;
    }

    for (a; a <= b; a++) {
        total *= a;
    }

    return total;
}

console.log(multiplier(1, 5));