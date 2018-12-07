import {
    Point
} from "../geometry/Point.js";

import {
    Rectangle
} from "../geometry/Rectangle.js";

console.log("Class Shape loaded ");
console.log("Class Shape loaded");
console.log("Class Point loaded");
console.log("Class Rectangle loaded");

console.log("Creating Two Points");
let p1 = new Point(0, 0);
let p2 = new Point(3, 2);

console.log("Creating Rectangle with Points");
let rect = new Rectangle(p1, p2);

console.log("Logging P2", rect._p2);
console.log("Changing values...");

rect._p2.x = 5;
rect._p2.y = -1;

console.log("Logging P2", rect._p2);

Object.assign(window, {
    p1,
    p2,
    rect
});