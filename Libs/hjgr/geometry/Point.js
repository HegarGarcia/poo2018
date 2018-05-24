export class Point {
    constructor(x, y) {
        this._x = x;
        this._y = y;
    }

    clone() {
        return new Point(this._x, this._y);
    }

    get x() {
        return this._x;
    }

    set x(val) {
        this._x = val;
    }

    get y() {
        return this._y;
    }

    set y(val) {
        this._y = val;
    }
}