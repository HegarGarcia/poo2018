// Imprimir la secuencia 1 + 1/2 + 1/3 + 1/4 ...

function sequence () {

    const limit = 10;
    let text = '';



    for (let i = 1; i <= limit; i++) {
        text += i == 1 ? `${i}` : `1/${i}`;

        if (i < limit)
            text += ' + ';    

    }

    console.log(text);
}