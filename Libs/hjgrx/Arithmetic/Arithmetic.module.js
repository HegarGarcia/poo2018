export function sum() {
    const values = Array.from(arguments);
    const valid = values.every((val) => !isNaN(val));
    if (!valid) throw new Error("Valores de válidos");
    return values.reduce((acc, curr) => acc + curr, 0);
}