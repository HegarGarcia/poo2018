// @ts-check

import Shape from "./Shape.class.js";

export default class Point extends Shape {
    constructor({ x = 0, y = 0 }) {
        super();
        this._x = x;
        this._y = y;
    }

    trichotomy() {}

    clone() {
        return new Point({ x: this._x, y: this._y });
    }

    static distance(p1, p2) {
        if (!Point.isPoint(p1, p2)) {
            throw new Error("Puntos no validos");
        }

        let xdiff = p1._x - p2._x;
        let ydiff = p1._y - p2._y;

        return Math.sqrt(Math.pow(xdiff, 2) + Math.pow(ydiff, 2));
    }

    static isPoint() {
        return [...arguments].every(point => point instanceof Point);
    }
}
