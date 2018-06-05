import * as NumberModule from "./Number/Number.module.js";

import Fraction from "./Fraction/Fraction.module.js";
import * as Arithmetic from "./Arithmetic/arithmetic.module.js";

import * as Util from "./Util/Util.module.js";
import MyDate from "./Date/Date.module.js";
import * as Discrete from "./Discrete/Discrete.module.js";
import * as MathModule from "./Math/Math.module.js";
import * as Text from "./Text/Text.module.js";

import Vector from "./Vector/Vector.module.js";
import Matrix from "./Matrix/Matrix.module.js";
import Robot from "./Robot/Robot.module.js";

const hjgr = {
    Autor: "HJGR",
    version: "0.1",

    NumberModule,

    Fraction,
    Arithmetic,

    Util,
    MyDate,
    Discrete,
    MathModule,
    Text,
    // Series,
    Vector,
    Matrix,
    Robot,
    // Cajero,
    // ConvertionRoman,
    // ConvertionLetter,

    Geometry: {}
};

Object.assign(window, { hjgr });
