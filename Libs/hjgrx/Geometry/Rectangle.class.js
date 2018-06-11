// @ts-check

import Shape from "./Shape.class.js";

export default class Rectangle extends Shape {
    constructor({ width = 1, height = 2 }) {
        super();
        this._width = width;
        this._height = height;
    }

    clone() {
        return new Rectangle({ width: this._width, height: this._height });
    }

    area() {
        return this._height * this._width;
    }

    perimeter() {
        return (this._height + this._width) * 2;
    }

    static isRectangle() {
        return [...arguments].every(
            recatangle => recatangle instanceof Rectangle
        );
    }
}
