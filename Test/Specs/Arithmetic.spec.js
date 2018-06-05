import * as Arithmetic from "/Libs/hjgrx/Arithmetic/Arithmetic.module.js";

describe("Arithmetic", function() {
    it("Should return 15 when adding [1, 2, 3, 4, 5]", function() {
        chai.expect(Arithmetic.sum(1, 2, 3, 4, 5)).to.equal(15);
    });

    it("Should return -13 when substracting [1, 2, 3, 4, 5]", function() {
        chai.expect(Arithmetic.subs(1, 2, 3, 4, 5)).to.equal(-13);
    });

    it("Should return 120 when multiplying [1, 2, 3, 4, 5]", function() {
        chai.expect(Arithmetic.mult(1, 2, 3, 4, 5)).to.equal(120);
    });

    it("Should return 0.1 when dividing 2 and 20", function() {
        chai.expect(Arithmetic.div(2, 20)).to.equal(0.1);
    });
});
