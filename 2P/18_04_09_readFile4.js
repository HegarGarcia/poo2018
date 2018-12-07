const { promisify } = require('util');
const fs = require('fs');
const readFile = promisify(fs.readFile);

// Leer documento e imprimir parrafos y sentencias
(async function (){
    let file = await readFile('./P2Files/q0.txt', {encoding: 'utf8'});

    let paragraph = file.split(/\n/g).filter(paragraph => paragraph.match(/./g) !== null);
    let sentencias = file.split(/([.?!,;<>¿¿])\s*/g).filter(paragraph => paragraph.match(/\w|\d/g) !== null);
    
    console.log(`Son ${paragraph.length} parrafos:`); // 2 parrafos
    for (let [index, word] of paragraph.entries()) {
        console.log(`\t${index + 1} - ${word}`);
    }
    
    console.log(`\nSon ${sentencias.length} sentencias:`); // 11 sentencias
    for (let [index, word] of sentencias.entries()) {
        console.log(`\t${index + 1} - ${word}`);
    }
})();