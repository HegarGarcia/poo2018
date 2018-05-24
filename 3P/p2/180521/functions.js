// Traditional Function
let antesFlecha = new Function('x', 'y', 'return x + y');
console.log(`Antes flecha: ${antesFlecha(2, 3)}`);

function multiply(x, y) {
    return x * y;
}
console.log(`Multiplicación: ${multiply(2, 3)}`);

// Array Function
antesFlecha = (x, y) => x + y;
console.log(`Antes flecha: ${antesFlecha(2, 3)}`);

multiply = (x, y) => x * y;
console.log(`Multiplicación: ${multiply(2, 3)}`);

// Es divisible entre 3
let h = a => a % 3;
console.log(h(2));

// No parameters
const horn = () => console.log('Toot...');
horn();

// Multiline Arrow Function
const power = (base, exponent) => {
    // let result = 1;
    // for (let i = 0; i < exponent; i++) result *= base;
    // return base;
    return base ** exponent;
};
console.log(`Potencia: ${power(2, 3)}`);

// No Parameters no return value
const empty = () => {};
console.log(`Vacio: ${empty()}`);

// IIFE
(() => console.log('Pine'))();

// Arrow Function with ternary operator
const simple = a => a > 20 ? 20 : a;
console.log(`Simple: ${simple(21)}`);
console.log(`Simple: ${simple(20)}`);
console.log(`Simple: ${simple(10)}`);

// Arrow Function with ternary operator
const max = (a, b) => a > b ? a : b;
console.log(`Maximo: ${max(1, 2)}`);

// Anonymous IIFE
(function (x) {
    console.log(x);
    return x
})(2);


// What is missing?
// function (x) {
//     return function (x, y) {
//         return x + y;
//     }
// }

// Shadowy IIFE
(function (x) {
    return function (y) {
        console.log(x * y);
        return x * y;
    }
})(2)(3);

// Shadowy IIFE Addition
(function (x) {
    return function (y) {
        console.log(x + y);
        return x + y;
    }
})(2)(3);

// Shadowy Named IIFE Addition
(function grandMother(x) {
    return function mother(y) {
        return function daughter(z) {
            return x + y + z;
        }
    }
})(2)(3)(4);