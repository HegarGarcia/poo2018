function pascalTriangle (numPisos) {

    let triangle = [[1]],
        piso;

    for (let i = 0; i < (numPisos - 1); i++) {
        piso = [1];
        for (let j = 1; j < triangle[i].length; j++) {
            piso[j] = triangle[i][j] + triangle[i][j - 1];
        }
        piso.push(1);
        triangle.push(piso);
    }

    return triangle;
}

function printTriangle (triangle) {

    const pisos = triangle.length;

    for (let piso of triangle) {
        let index = triangle.indexOf(piso);
        if (index === 0)
            console.log(`${' '.repeat(pisos * 2)}${piso.toString()}`);
        else {
            let pisoTxt = piso.toString();
            console.log(`${' '.repeat((pisos - index) * 2)}${pisoTxt.split(',').join('   ')}`);
        }
    }

}


let pisos = 5;
let triangulo = pascalTriangle(pisos);

printTriangle(triangulo);