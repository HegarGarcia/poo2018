const { promisify } = require('util');
const fs = require('fs');
const readFile = promisify(fs.readFile);

// Leer documento, dividir en palabras, e imprimir cada una con índice
(async function (){
    console.log('Inicio\n');

    let file = await readFile('./P2Files/q0.txt', {encoding: 'utf8'});

    file = file.split(/\r*\n|\r|\s/g).filter((word) => word.length !== 0);
    
    for (let [index, word] of file.entries()) {
        console.log(`${index + 1} - ${word}`);
    }

    console.log(`\nSon ${file.length} palabras`); // 38 palabras

    console.log('Done!');
})();