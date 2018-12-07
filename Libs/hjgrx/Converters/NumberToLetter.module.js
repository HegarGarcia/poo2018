const UNIDADES = new Map([
    [1, "uno"],
    [2, "dos"],
    [3, "tres"],
    [4, "cuatro"],
    [5, "cinco"],
    [6, "seis"],
    [7, "siete"],
    [8, "ocho"],
    [9, "nueve"],
    [10, "diez"],
    [11, "once"],
    [12, "doce"],
    [13, "trece"],
    [14, "catorce"],
    [15, "quince"],
    [16, "dieciseis"],
    [17, "diecisiete"],
    [18, "dieciocho"],
    [19, "diecinueve"],
    [20, "veinte"],
    [21, "veintino"],
    [22, "veintidos"],
    [23, "veintitres"],
    [24, "veinticuatro"],
    [25, "veinticinco"],
    [26, "veintiseis"],
    [27, "veintisiete"],
    [28, "veintiocho"],
    [29, "veintinueve"]
]);

const DECENAS = new Map([
    [3, "treinta"],
    [4, "cuarenta"],
    [5, "cincuenta"],
    [6, "sesenta"],
    [7, "setenta"],
    [8, "ochenta"],
    [9, "noventa"]
]);

const CENTENAS = new Map([
    [1, "ciento"],
    [2, "doscientos"],
    [3, "trescientos"],
    [4, "cuatrocientos"],
    [5, "quinientos"],
    [6, "seiscientos"],
    [7, "setecientos"],
    [8, "ochocientos"],
    [9, "novecientos"]
]);

export default function NumberToLetter(num) {
    if (typeof num !== "number") throw new Error("Valor no es un número");
    if (num > 1000000000000) throw new Error("Valor demasiado grande");

    if (num === 0) {
        return "cero";
    } else if (num < 30 && num > 0) {
        return UNIDADES.get(num);
    } else if (num < 100) {
        return getDecenas(num);
    } else if (num < 1000) {
        return getCentenas(num);
    } else if (num < 1000000) {
        return getMillares(num);
    } else {
        return getMillones(num);
    }
}

function getMillones(num) {
    let millones = Math.floor(num / 1000000),
        resto = num - millones * 1000000,
        result;

    if (millones >= 1000) {
        result = `${getMillares(millones)} millones`;
    } else if (millones >= 100) {
        result = `${getCentenas(millones)} millones`;
    } else if (millones >= 29) {
        result = `${getDecenas(millones)} millones`;
    } else if (millones === 1) {
        result = "un millón";
    } else {
        result = `${UNIDADES.get(millones)} millones`;
    }

    if (resto >= 1000) {
        result += ` ${getMillares(resto)}`;
    } else if (resto >= 100) {
        result += ` ${getCentenas(resto)}`;
    } else if (resto > 29) {
        result += ` ${getDecenas(resto)}`;
    } else if (resto > 0) {
        result += ` ${UNIDADES.get(resto)}`;
    }

    return result;
}

function getMillares(num) {
    let millares = Math.floor(num / 1000),
        resto = num - millares * 1000,
        result;

    if (millares >= 100) {
        result = `${getCentenas(millares)} mil`;
    } else if (millares > 29) {
        result = `${getDecenas(millares)} mil`;
    } else if (millares === 1) {
        result = "mil";
    } else {
        result = `${UNIDADES.get(millares)} mil`;
    }

    if (resto >= 100) {
        result += ` ${getCentenas(resto)}`;
    } else if (resto > 29) {
        result += ` ${getDecenas(resto)}`;
    } else if (resto > 0) {
        result += ` ${UNIDADES.get(resto)}`;
    }

    return result;
}

function getCentenas(num) {
    let centenas = Math.floor(num / 100),
        resto = num - centenas * 100;

    if (resto === 0) {
        return centenas === 1 ? "cien" : CENTENAS.get(centenas);
    }

    return `${CENTENAS.get(centenas)} ${getDecenas(resto)}`;
}

function getDecenas(num) {
    let decenas = Math.floor(num / 10),
        resto = num - decenas * 10,
        decimales = resto % 1,
        result;

    resto -= decimales;

    if (num <= 29) {
        result = UNIDADES.get(num);
    } else if (resto > 0) {
        result = `${DECENAS.get(decenas)} y ${UNIDADES.get(resto)}`;
    } else {
        result = `${DECENAS.get(decenas)}`;
    }

    if (decimales > 0) {
        decimales = decimales.toFixed(2) * 10;
        result += ` con ${getDecenas(decimales)} centesímos`;
    }

    return result;
}
