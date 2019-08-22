import Fraction from "./../../Libs/hjgrx/Fraction/Fraction.module.js";

describe("Number to Letter Module", function() {
    let fractionA, fractionB;

    before(function() {
        fractionA = new Fraction(20, 40);
        fractionB = new Fraction(12, 60);
    });

    it("Should add two fractions", function() {
        let result = fractionA.add(fractionB);
        chai.expect(result).to.be.deep.equal(new Fraction(7, 10));
    });

    it("Should substract two fractions", function() {
        let result = fractionA.subtract(fractionB);
        chai.expect(result).to.be.deep.equal(new Fraction(3, 10));
    });

    it("Should multiply two fractions", function() {
        let result = fractionA.multiply(fractionB);
        chai.expect(result).to.be.deep.equal(new Fraction(1, 10));
    });

    it("Should divide two fractions", function() {
        let result = fractionA.divide(fractionB);
        chai.expect(result).to.be.deep.equal(new Fraction(5, 2));
    });

    it("Should return false when fractions are different", function() {
        let result = fractionA.equals(fractionB);
        chai.expect(result).to.be.equal(false);
    });

    it("Should return a decimal representation of the fraction", function() {
        let result = fractionB.toNumber();
        chai.expect(result).to.be.equal(0.2);
    });
});
