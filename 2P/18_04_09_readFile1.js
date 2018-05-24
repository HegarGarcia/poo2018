const { promisify } = require('util');
const fs = require('fs');
const readFile = promisify(fs.readFile);

// Leer Documento y dividirlo en palabras e imprimir cada una
(async function (){
    console.log('Inicio\n');

    let file = await readFile('./P2Files/q0.txt', {encoding: 'utf8'});

    file = file.split(' ');

    for (let word of file) {
        console.log(word);
    }

    console.log(file.length); // 38 palabras

    console.log('Done!');
})();