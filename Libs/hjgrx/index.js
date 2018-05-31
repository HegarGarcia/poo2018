import {
    Cajero
} from "./Cajero/Cajero.module.js";

import {
    ConvertionLetter
} from "./LetrasConverter/Letra.module.js";

import {
    ConvertionRoman
} from "./RomanoConverter/Romano.module.js";

import {
    Fraction
} from "./Fraction/Fraction.module.js";

import * as Arithmetic from "./Arithmetic/arithmetic.module.js";
import * as Text from "./Text/Text.module.js";
import * as NumberModule from "./Number/Number.module.js";
import * as Discrete from "./Discrete/Discrete.module.js";
import * as MathModule from "./Math/Math.module.js";

const Module = Object.freeze({
    Autor: "HJGR",
    version: "0.1",

    NumberModule,
    Fraction,
    Arithmetic,

    Discrete,
    Math,
    geometry: {},
    Text,
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
    }
});

Object.assign(window, {
    Module
});