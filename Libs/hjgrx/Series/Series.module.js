import "./../Number/Number.module.js";

export function rangeAB(min = 0, max = 10) {
    let sort = Number.trichotomy(min, max);

    if (sort === 1) {
        let c = max;
        max = min;
        min = c;
    }

    if (max === min) return [min];

    const length = max - min + 1;
    return Array.from({ length }, (_, i) => min + i);
}

export function rangeN(max = 10) {
    return rangeAB(0, max);
}

export function fibonacci(length = 10) {
    if (length <= 0) throw new Error("Valor tiene que ser mayor a 0");

    let a = 1,
        b = 0,
        arr = [],
        temp;

    for (let i = 0; i < length; i++) {
        arr.push(a);

        temp = a;
        a += b;
        b = temp;
    }

    return arr;
}
