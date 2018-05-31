// Double using For Loop
let doubleFL = function (list) {
    let result = [];

    for (let i = 0; i < list.length; i++) {
        result.push(result[i] * 2);
    }

    return result;
};

// Double using ForEach
let doubleFE = function (list) {
    let result = [];

    list.forEach(number => result.push(number * 2));

    return result;
};

// Double using Map
let doubleWM = function (list) {
    return list.map(function (num) {
        return num * 2;
    });
};

let doubleWMA = function (list) {
    return list.map(num => num * 2);
};

let doubleWMAA = list => list.map(num => num * 2);

let a = [5, 4, 3, 2, 1];

console.log(doubleFL(a));
console.log(doubleFE(a));
console.log(doubleWM(a));
console.log(doubleWMA(a));
console.log(doubleWMAA(a));