export function isNumber(num) {
    return !isNaN(num);
}

export function isPositive(num) {
    validate();
    return num >= 0;
}

export function isNegative(num) {
    validate();
    return num < 0;
}

function validate(num) {
    if (isNaN(num)) throw new Error("Valor no válido");
}