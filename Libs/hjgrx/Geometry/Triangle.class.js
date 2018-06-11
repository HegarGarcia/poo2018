// @ts-check

import Shape from "./Shape.class.js";
import Point from "./Point.class.js";

export default class Triangle extends Shape {
    constructor(pointA, pointB, pointC) {
        if (!Point.isPoint(pointA, pointB, pointC)) {
            throw new Error("Puntos no validos");
        }

        super();
        this._pA = pointA.clone();
        this._pB = pointB.clone();
        this._pC = pointC.clone();

        this._dAB = Point.distance(this._pA, this._pB);
        this._dBC = Point.distance(this._pB, this._pC);
        this._dCA = Point.distance(this._pC, this._pA);
    }

    clone() {
        return new Triangle(this._pA, this._pB, this._pC);
    }

    area() {
        const p = this.perimeter() / 2;
        const product = p * (p - this._dAB) * (p - this._dBC) * (p - this._dCA);
        return Math.sqrt(product);
    }

    perimeter() {
        return this._dAB + this._dBC + this._dCA;
    }

    static isTriangle() {
        return [...arguments].every(triangle => triangle instanceof Triangle);
    }
}
