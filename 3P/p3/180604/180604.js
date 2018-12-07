// Multiplier
const arr = [4, 8, 15, 16, 23, 42];

const mult = function (a, b) {
    return a * b;
}

// Sum
const sum = (x, y) => x + y;


function runTest() {
    arr.reduce(mult, 1);
    arr.reduce(sum, 0);
}