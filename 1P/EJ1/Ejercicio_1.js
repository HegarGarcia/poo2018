// Indicar la Estación del Año

function yearSeasons (month) {

    try {
        month = Number(month);
    } catch {
        throw 'El Valor ingresado es inválido';
    }

    let monthTxt;

    switch (month) {
        case 1:
        case 2:
        case 3:
            monthTxt = 'Invierno';
            break;
        case 4:
        case 5:
        case 6:
            monthTxt = 'Primavera';
            break;
        case 7:
        case 8:
        case 9:
            monthTxt = 'Verano';
            break;
        case 10:
        case 11:
        case 12:
            monthTxt = 'Otoño';
            break;
        default:
            monthTxt = 'El mes no es válido';
            break;
    }

    return monthTxt;
}