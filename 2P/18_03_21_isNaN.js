console.log('Elige un número');
let number = Number(readline());

if (!isNaN(number))
    console.log(`Tu número es la raíz cuadrada de ${number * number}`);