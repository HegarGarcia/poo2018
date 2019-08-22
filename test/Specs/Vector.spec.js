import Vector from "./../../Libs/hjgrx/Vector/Vector.module.js";

describe("Vector Module", function() {
    let vector;
    let vector2;

    before(() => {
        vector = new Vector(5);
        vector2 = new Vector(5);
        vector2.fillWith(2);
    });

    it("Should fill with zeros", function() {
        vector.fillZeros();
        chai.expect(vector.arr).to.deep.equal([0, 0, 0, 0, 0]);
    });

    it("Should fill with ones", function() {
        vector.fillOnes();
        chai.expect(vector.arr).to.deep.equal([1, 1, 1, 1, 1]);
    });

    it("Should fill with random numbers", function() {
        vector.fillRnd();
        chai.expect(vector.arr).to.be.an("array");

        vector.fillRange();
        chai.expect(vector.arr).to.be.an("array");
    });

    it("Should fill with 10's", function() {
        vector.fillWith(10);
        chai.expect(vector.arr).to.deep.equal([10, 10, 10, 10, 10]);
    });

    it("Should return the sum of the vector", function() {
        chai.expect(vector.sum()).to.equal(50);
    });

    it("Should return the add an scalar of the vector", function() {
        let temp = vector.sumE(10);
        chai.expect(temp.arr).to.deep.equal([20, 20, 20, 20, 20]);
    });

    it("Should return the substract an scalar of the vector", function() {
        let temp = vector.subsE(10);
        chai.expect(temp.arr).to.deep.equal([0, 0, 0, 0, 0]);
    });

    it("Should return the multiply an scalar of the vector", function() {
        let temp = vector.multE(3);
        chai.expect(temp.arr).to.deep.equal([30, 30, 30, 30, 30]);
    });

    it("Should return the divide an scalar of the vector", function() {
        let temp = vector.divE(5);
        chai.expect(temp.arr).to.deep.equal([2, 2, 2, 2, 2]);
    });

    it("Should return the add a vector of the vector", function() {
        let temp = vector.sumV(vector2);
        chai.expect(temp.arr).to.deep.equal([12, 12, 12, 12, 12]);
    });

    it("Should return the substract a vector of the vector", function() {
        let temp = vector.subsV(vector2);
        chai.expect(temp.arr).to.deep.equal([8, 8, 8, 8, 8]);
    });

    it("Should return the multiply a vector of the vector", function() {
        let temp = vector.multV(vector2);
        chai.expect(temp.arr).to.deep.equal([20, 20, 20, 20, 20]);
    });

    it("Should return the divide a vector of the vector", function() {
        let temp = vector.divV(vector2);
        chai.expect(temp.arr).to.deep.equal([5, 5, 5, 5, 5]);
    });

    it("Should return the average of the values of the vector, 10", function() {
        chai.expect(vector.avg()).to.equal(10);
    });

    it("Should return the minimun value in the vector", function() {
        chai.expect(vector.min()).to.equal(10);
    });

    it("Should return the minimun value in the vector", function() {
        chai.expect(vector.max()).to.equal(10);
    });

    it("Should return the dot product of two vectores", function() {
        chai.expect(vector.dot(vector2)).to.equal(100);
    });

    it("Should return norm of the vector", function() {
        chai.expect(vector.norm()).to.equal(22.360679774997898);
    });

    it("Should return the angle between two vectors", function() {
        chai.expect(vector.angle(vector2)).to.equal(1.369438406004566);
    });

    it("Should return the distance between two vectors", function() {
        chai.expect(vector.distance(vector2)).to.equal(17.88854381999832);
    });

    it("Should return if two vectors are orthogonal", function() {
        chai.expect(vector.isOrthogonal(vector2)).to.equal(false);
    });

    it("Should return if two vectors are similar", function() {
        chai.expect(vector.isSimilarVector(vector2)).to.equal(false);
    });
});
