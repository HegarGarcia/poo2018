import { Cajero } from "./Cajero/Cajero.module.js";

import { ConvertionLetter } from "./LetrasConverter/Letra.module.js";

import { ConvertionRoman } from "./RomanoConverter/Romano.module.js";

import { Fraction } from "./Fraction/Fraction.module.js";

import * as Arithmetic from "./Arithmetic/arithmetic.module.js"
import * as Text from "./Text/Text.module.js"

const Module = Object.freeze({
    Autor: "HJGR",
    version: "0.1",
    number: {},

    Fraction,
    Arithmetic,

    discrete: {},
    math: {},
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

Object.assign(window, { Module });