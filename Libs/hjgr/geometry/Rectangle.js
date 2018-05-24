import {
    Shape
} from "./Shape.js";

import {
    Point
} from "./Point.js";

export class Rectangle extends Shape {
    constructor(p1, p2) {
        if (!(p1 instanceof Point) && !(p2 instanceof Point)) {
            throw new Error("No son puntos");
        }
        super();

        this._p1 = p1.clone();
        this._p2 = p2.clone();
    }

    draw() {}

    clone() {}

    get p1() {
        return this._p1;
    }

    set p1(val) {
        this._p1 = val;
    }

    get p2() {
        return this._p2;
    }

    set p1(val) {
        this._p2 = val;
    }
}