// Indica si el punto está dentro, sobre o fuera del círculo unitario

/*
function pointInUnitaryCircle (x, y) {

    const r = 1;
    const pointDistance = Math.sqrt(Math.pow(x, 2) + Math.pow(y, 2));

    console.log(pointDistance)

    let pointLocation;

    if (pointDistance < r) {
        pointLocation = 'dentro';
    } else if (pointDistance > r) {
        pointLocation = 'fuera';
    } else {
        pointLocation = 'sobre';
    }

    return `El Punto está ${pointLocation} del círculo`;
}
*/

function pointInUnitaryCircle (x, y) {

    const r = 1;
    const pointDistance = Math.sqrt(Math.pow(x, 2) + Math.pow(y, 2));

    return pointDistance == 1 ? 0 : pointDistance > 1 ? 1 : -1;
}