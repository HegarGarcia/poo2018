// @ts-check

import Shape from "./Shape.class.js";

export default class Square extends Shape {
    constructor(width = 1) {
        super();
        this._width = width;
    }

    clone() {
        return new Square(this._width);
    }

    area() {
        return this._width * 2;
    }

    perimeter() {
        return this._width * 4;
    }

    static isSquare() {
        return [...arguments].every(square => square instanceof Square);
    }
}
