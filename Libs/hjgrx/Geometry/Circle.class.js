// @ts-check

import Shape from "./Shape.class.js";
import Point from "./Point.class.js";
import Triangle from "./Triangle.class.js";

export default class Circle extends Shape {
    constructor(center, radius) {
        if (!Point.isPoint(center)) throw new Error("Valores no validos");

        super();
        this._center = center;
        this._radius = radius;
    }

    clone() {
        return new Circle(this._center, this._radius);
    }

    area() {
        return Math.PI * this._radius ** 2;
    }

    perimeter() {
        return 2 * Math.PI * this._radius;
    }

    collides(circle) {
        if (!Circle.isCircle(circle)) throw new Error("Valor no válido");
        const centerDistance = Point.distance(this._center, circle._center);
        const radiusSum = this._radius + circle._radius;

        return centerDistance <= radiusSum;
    }

    isInscribed(triangle) {
        if (!Triangle.isTriangle(triangle)) throw new Error("Valor no válido");
        const { _pA, _pB, _pC } = triangle;

        const s = (_pA + _pB + _pC) / 2;
        const radius = Math.sqrt(s * (s - _pA) * (s - _pB) * (s - _pC)) / s;

        return radius === this._radius;
    }

    isCircunscribed(triangle) {
        if (!Triangle.isTriangle(triangle)) throw new Error("Valor no válido");
        const { _pA, _pB, _pC } = triangle;

        const s = (_pA + _pB + _pC) / 2;
        const radius =
            (_pA * _pB * _pC) /
            (4 * Math.sqrt(s * (s - _pA) * (s - _pB) * (s - _pC)));

        return radius === this._radius;
    }

    static isCircle() {
        return [...arguments].every(circle => circle instanceof Circle);
    }
}
