import {
    Cajero
} from "./Cajero.module.js";

import {
    ConvertionLetter
} from "./Letra.module.js";

import {
    ConvertionRoman
} from "./Romano.module.js";

import {
    Fraction
} from "./Fraction/Fraction.module.js";

import {
    a
} from "./Fraction/index.js";

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