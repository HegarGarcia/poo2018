export function sum() {
    const values = Array.from(arguments);
    const valid = values.every((val) => !isNaN(val));

    if (!valid) {
        throw new Error("Valores no válidos");
    }

    return values.reduce((acc, curr) => acc + curr, 0);
}

export function subs() {
    const values = Array.from(arguments);
    const valid = values.every((val) => !isNaN(val));

    if (!valid) {
        throw new Error("Valores no válidos");
    }

    return values.reduce((acc, curr) => acc - curr);
}

export function mult() {
    const values = Array.from(arguments);
    const valid = values.every((val) => !isNaN(val));

    if (!valid) {
        throw new Error("Valores no válidos");
    }

    return values.reduce((acc, curr) => acc * curr);
}

export function div(quotient, dividend) {
    const valid = !isNaN(quotient) && !isNaN(dividend) && dividend !== 0;

    if (!valid) {
        throw new Error("Valores no válidos");
    }

    return (quotient / dividend);
}