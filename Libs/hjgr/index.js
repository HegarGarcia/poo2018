import {
    Point
} from "./geometry/Point.js";

import {
    Rectangle
} from "./geometry/Rectangle.js";

import {
    Shape
} from "./geometry/Shape.js";

const HJGR = (function () {
    let hjgr = {
        autor: "Hegar Garcia",
        version: "0.1",
        math: {
            x: 0.01,
            pi: 3.1416
        }
    };

    return hjgr;
})()

export {
    Point,
    Rectangle,
    Shape,
    HJGR
}