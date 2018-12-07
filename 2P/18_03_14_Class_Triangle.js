const Point = require('./18_03_14_Class_Point.js');

class Triangle {
    constructor(p1, p2, p3) {
        if (!(p1 instanceof Point) || !(p2 instanceof Point) || !(p3 instanceof Point)) throw 'Not Points';

        // Check de 

        this.p1 = p1;
        this.p2 = p2;
        this.p3 = p3;
    }
}

let p = new Point();

console.log(p.value())