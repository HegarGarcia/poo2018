export function isFunction(func) {
    return typeof func === "function";
}

export function isObject(obj) {
    return typeof obj === "object";
}

export function isNumber(num) {
    return typeof num === "number";
}

export function isArray(arr) {
    return Array.isArray(arr);
}

export function random() {
    return Math.random();
}

export function randomAB(min = 0, max = 10) {
    let sort = Number.trichotomy(min, max);

    if (sort === 1) {
        let c = max;
        max = min;
        min = c;
    }

    return sort === 0 ? 0 : Math.floor(Math.random() * (max - min + 1)) + min;
}

export function randomN(max) {
    return Math.floor(Math.random() * (max + 1));
}
