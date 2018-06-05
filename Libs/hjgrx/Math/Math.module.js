import { sum as sumArithmetic } from "./../Arithmetic/Arithmetic.module.js";

export const PI = 3.1416;
export const radian = 57.29;
export const degree = 0.0174533;

export function abs(num) {
    if (isNaN(num)) throw new Error("Valor no Válido");
    return num > 0 ? num : num * -1;
}

export function sum(val) {
    return sumArithmetic(val);
}

export function square(val) {
    let result;
    if (val instanceof Array) {
        result = val.map(num => num ** 2);
    } else if (!isNaN(val)) {
        result = val ** 2;
    } else {
        throw new Error("Valor no válido");
    }

    return result;
}

export function pow(a, n) {
    if (isNaN(n) || isNaN(a)) throw new Error("Valor no Válido");

    return a ** n;
}

export function double() {
    let result;
    if (val instanceof Array) {
        result = val.map(num => num * 2);
    } else if (!isNaN(val)) {
        kw;
        result = val * 2;
    } else {
        throw new Error("Valor no válido");
    }

    return result;
}
