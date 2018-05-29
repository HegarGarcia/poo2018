import { Cajero } from "./Cajero/Cajero.module.js";

import { ConvertionLetter } from "./LetrasConverter/Letra.module.js";

import { ConvertionRoman } from "./RomanoConverter/Romano.module.js";

import { Fraction } from "./Fraction/Fraction.module.js";


export const HJGR = (function () {
    return ({
        autor: "HJGR",
        version: "0.1",
        number: {},
        Fraction,
        arithmetic: {},
        discrete: {},
        math: {},
        geometry: {},
        text: {},
        Cajero,
        ConvertionLetter,
        ConvertionRoman,

        shannon: {},
        som: {},
        date: {},
        time: {},
        error: {},
        scrabble: {
            model: {},
            view: {},
            controller: {},
            error: {}
        },
    });
})();