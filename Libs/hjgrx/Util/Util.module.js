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
    return arr instanceof Array;
}