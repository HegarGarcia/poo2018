// @ts-check

import Shape from "./Shape.class.js";
import Point from "./Point.class.js";
import Fraction from "./../Fraction/Fraction.module.js";

export default class Line extends Shape {
    constructor(pointA, pointB) {
        if (!Point.isPoint(pointA, pointB)) {
            throw new Error("Puntos no validos");
        }

        super();
        this._pA = pointA.clone();
        this._pB = pointB.clone();

        let ydiff = this._pB._y - this._pA._y;
        let xdiff = this._pB._x - this._pA._x;

        this.slope = new Fraction(ydiff, xdiff);
    }

    isParallel(line) {
        if (!Line.isLine(line)) throw new Error("Valor no válido");
        return this.slope.equals(line.slope);
    }

    isPerperdicular(line) {
        if (!Line.isLine(line)) throw new Error("Valor no válido");
        return this.slope.multiply(line.slope).toNumber() === -1;
    }

    length() {
        return Point.distance(this._pA, this._pB);
    }

    clone() {
        return new Line(this._pA, this._pB);
    }

    static isLine() {
        return [...arguments].every(line => line instanceof Line);
    }
}
