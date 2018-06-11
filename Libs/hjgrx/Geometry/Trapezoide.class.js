// @ts-check

import Shape from "./Shape.class.js";
import Point from "./Point.class.js";
import Line from "./Line.class.js";

export default class Trapezoide extends Shape {
    constructor(pointA, pointB, pointC, pointD, height) {
        if (!Point.isPoint(pointA, pointB, pointC, pointD)) {
            throw new Error("Valores no validos");
        }

        super();
        this._lAB = new Line(pointA, pointB);
        this._lBC = new Line(pointB, pointC);
        this._lCD = new Line(pointC, pointD);
        this._lDA = new Line(pointD, pointA);
        this._lines = [this._lAB, this._lBC, this._lCD, this._lDA];
        this._parallelLines = [];

        this._height = height;
        this._points = [pointA, pointB, pointC, pointD];

        for (let [i, lineA] of this._lines.entries()) {
            for (let [j, lineB] of this._lines.entries()) {
                if (i !== j && lineA.isParallel(lineB)) {
                    this._parallelLines.push(lineA);
                }
            }
        }
    }

    clone() {
        return new Trapezoide(...this._points, this._height);
    }

    area() {
        const base = this._parallelLines.reduce(
            (acc, line) => acc + line.length(),
            0
        );

        return (base / 2) * this._height;
    }

    perimeter() {
        return this._lines.reduce((acc, line) => acc + line.length(), 0);
    }

    static isTrapezoide(trapezoide) {
        return trapezoide instanceof Trapezoide;
    }
}
