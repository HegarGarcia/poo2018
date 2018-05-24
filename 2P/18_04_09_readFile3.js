const { promisify } = require('util');
const fs = require('fs');
const readFile = promisify(fs.readFile);

// Leer y separar por caracteres e imprimir cada uno con su índice
(async function (){
    console.log('Inicio\n');

    let file = await readFile('./P2Files/q0.txt', {encoding: 'utf8'});

    file = file.split('').filter((word) => word.match(/\r|\s/g) === null);
    
    for (let [index, word] of file.entries()) {
        console.log(`${index + 1} - ${word}`);
    }

    console.log(`\nSon ${file.length} caracteres`); // 38 palabras

    console.log('Done!');
})();