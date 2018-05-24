class Point {
    constructor(x = 0, y = 0) {
        this._x = x;
        this._y = y;
    }

    value() {
        return `(${this._x}, ${this._y})`;
    }

    static distance(p1, p2) {
        if (!(p1 instanceof Point) || !(p2 instanceof Point)) throw 'Not a point';

        let xdiff = p1._x - p2._x;
        let ydiff = p1._y - p2._y;

        return Math.sqrt(Math.pow(xdiff, 2) + Math.pow(ydiff, 2));
    }

    clone() {
        return new Point(this._x, this._y);
    }

    set X(x) {
        this._x = x;
    }

    get X() {
        return this._x;
    }

    set Y(y) {
        this._y = y;
    }

    get Y() {
        return this._y;
    }
};

module.exports = Point;

