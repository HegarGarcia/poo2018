let sum = function () {
    t = 0;

    for (let i = 0; i < arguments.length; i++) {
        t += arguments[i];
    }

    return t;
}

console.log(sum(2,3));
console.log(sum(2,3,7,8,9,6,5,4));