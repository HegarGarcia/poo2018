const { promisify } = require('util');
const fs = require('fs');
const readFile = promisify(fs.readFile);

// Leer documento, imprimir su longitud e imprimir su contenido
(async function (){
    console.log('Inicio\n');

    let file = await readFile('./P2Files/q0.txt', {encoding: 'utf8'});

    console.log(file.length);
    console.log(file);

    console.log('Done!');
})();