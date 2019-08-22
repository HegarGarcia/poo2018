export default class Shape {
    clone() {
        return new Shape(this.coords, this.sides);
    }

    static isShape() {
        return [...arguments].every(shape => shape instanceof Shape);
    }
}
