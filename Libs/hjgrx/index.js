import * as NumberModule from "./Number/Number.module.js";

import Fraction from "./Fraction/Fraction.module.js";
import * as Arithmetic from "./Arithmetic/arithmetic.module.js";

import * as Util from "./Util/Util.module.js";
import * as Discrete from "./Discrete/Discrete.module.js";
import * as MathModule from "./Math/Math.module.js";
import * as Text from "./Text/Text.module.js";

const Module = {
    Autor: "HJGR",
    version: "0.1",

    NumberModule,

    Fraction,
    Arithmetic,

    Util,
    // DateModule,
    Discrete,
    Math,
    Text,
    // Series,
    // Vector,
    // Matrix,
    // Robot,
    // Cajero,
    // ConvertionRoman,
    // ConvertionLetter,

    Geometry: {},

    Shannon: {},
    Som: {},
    Error: {}
};

Object.assign(window, {
    Module
});