import {
  Circle,
  Line,
  Point,
  Rectangle,
  Square,
  Trapezoide,
  Triangle
} from './../../Libs/hjgrx/Geometry/Geometry.module.js';

describe('Geometry Module', function() {
  let pointA, pointB, pointC, pointD, lineA, lineB, triangle;

  before(() => {
    pointA = new Point({
      x: 0,
      y: 0
    });
    pointB = new Point({
      x: 5,
      y: 5
    });
    pointC = new Point({
      x: 3,
      y: 5
    });
    pointD = new Point({
      x: 7,
      y: 0
    });
    lineA = new Line(pointA, pointB);
    lineB = new Line(pointB, pointC);
    triangle = new Triangle(pointA, pointB, pointC);
  });

  describe('Point', function() {
    it('Should return trichotomy', function() {
      chai.expect();
    });

    it('Should return a clone of the point', function() {
      chai.expect(pointA.clone()).to.deep.equal(pointA);
    });

    it('Should return the distance between two points', () => {
      chai.expect(Point.distance(pointA, pointB)).to.equal(7.0710678118654755);
    });

    it('Should return if is Point', () => {
      chai.expect(Point.isPoint(pointA)).to.equal(true);
    });
  });

  describe('Line', function() {
    it('Should return if two lines are parallels', () => {
      chai.expect(lineA.isParallel(lineB)).to.equal(false);
    });

    it('Should return if two lines are perperdicular', () => {
      chai.expect(lineA.isPerperdicular(lineB)).to.equal(false);
    });

    it('Should return the length of the line', () => {
      chai.expect(lineA.length()).to.equal(7.0710678118654755);
    });

    it('Should return clone the line', () => {
      chai.expect(lineA.clone()).to.deep.equal(lineA);
    });

    it('Should return if is Line', () => {
      chai.expect(Line.isLine(lineA)).to.equal(true);
    });
  });

  describe('Rectangle', function() {
    let rectangle;

    before(() => (rectangle = new Rectangle({})));

    it('Should return the area', () => {
      chai.expect(rectangle.area()).to.equal(2);
    });

    it('Should return the perimeter', () => {
      chai.expect(rectangle.perimeter()).to.equal(6);
    });

    it('Should clone the rectangle', () => {
      chai.expect(rectangle.clone()).to.deep.equal(rectangle);
    });

    it('Should return if is Rectangle', () => {
      chai.expect(Rectangle.isRectangle(rectangle)).to.equal(true);
    });
  });

  describe('Square', function() {
    let square;

    before(() => (square = new Square(4)));

    it('Should return the area', () => {
      chai.expect(square.area()).to.equal(8);
    });

    it('Should return the perimeter', () => {
      chai.expect(square.perimeter()).to.equal(16);
    });

    it('Should clone the square', () => {
      chai.expect(square.clone()).to.deep.equal(square);
    });

    it('Should return if is Square', () => {
      chai.expect(Square.isSquare(square)).to.equal(true);
    });
  });

  describe('Triangle', function() {
    it('Should return the area', () => {
      chai.expect(triangle.area()).to.equal(5);
    });

    it('Should return the perimeter', () => {
      chai.expect(triangle.perimeter()).to.equal(14.902019706710776);
    });

    it('Should clone the triangle', () => {
      chai.expect(triangle.clone()).to.deep.equal(triangle);
    });

    it('Should return if is Triangle', () => {
      chai.expect(Triangle.isTriangle(triangle)).to.equal(true);
    });
  });

  describe('Trapezoide', function() {
    let trapezoide;

    before(() => {
      trapezoide = new Trapezoide(pointA, pointB, pointC, pointD, 5);
    });

    it('Should return the area', () => {
      chai.expect(trapezoide.area()).to.equal(22.5);
    });

    it('Should return the perimeter', () => {
      chai.expect(trapezoide.perimeter()).to.equal(22.474192049298324);
    });

    it('Should clone the trapezoide', () => {
      chai.expect(trapezoide.clone()).to.deep.equal(trapezoide);
    });

    it('Should return if is Trapezoide', () => {
      chai.expect(Trapezoide.isTrapezoide(trapezoide)).to.equal(true);
    });
  });

  describe('Circle', function() {
    let circleA;
    let circleB;

    before(() => {
      circleA = new Circle(pointA, 10);
      circleB = new Circle(pointB, 9);
    });

    it('Should return the area', () => {
      chai.expect(circleA.area()).to.equal(314.1592653589793);
    });

    it('Should return the perimeter', () => {
      chai.expect(circleA.perimeter()).to.equal(62.83185307179586);
    });

    it('Should clone the circle', () => {
      chai.expect(circleA.clone()).to.deep.equal(circleA);
    });

    it('Should return true if circles collide', () => {
      chai.expect(circleA.collides(circleB)).to.equal(true);
    });

    it('Should return true if circles is inscribed', () => {
      chai.expect(circleA.isInscribed(triangle)).to.equal(false);
    });

    it('Should return true if circles is circunscribed', () => {
      chai.expect(circleA.isCircunscribed(triangle)).to.equal(false);
    });

    it('Should return if is Circle', () => {
      chai.expect(Circle.isCircle(circleA)).to.equal(true);
    });
  });
});
