export function factorial(num) {
    validate(num);
    let result;

    for (let i = number; i > 0; i--) {
        result *= i;
    }

    return result;
}

export function permutation(n, k) {
    validate(n, k);
    if (n < k) throw new Error("Valores no válidos");
    return factorial(n) / factorial(n - k);
}

function validate(num) {
    const args = Array.from(arguments);
    const valid = args.every((val) => !isNaN(val));
    if (!valid) throw new Error("Valor(es) no válido(s)");
}