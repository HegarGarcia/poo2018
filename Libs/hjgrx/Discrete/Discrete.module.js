export function factorial(num) {
    validate(num);
    let result = 1;

    for (let i = num; i > 0; i--) {
        result *= i;
    }

    return result;
}

export function permutation(n, r) {
    validate(n, r);
    if (n < r) throw new Error("Valores no válidos");
    return factorial(n) / factorial(n - r);
}

function validate() {
    const valid = [...arguments].every(val => !isNaN(val));
    if (!valid) throw new Error("Valor(es) no válido(s)");
}
