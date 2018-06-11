import * as MyMath from "./../../Libs/hjgrx/Math/Math.module.js";

describe("Math Module", function() {
    it("Should return absolute value of -10", function() {
        chai.expect(MyMath.abs(-10)).to.equal(10);
    });

    it("Should return 15 when adding [1, 2, 3, 4, 5]", function() {
        chai.expect(MyMath.sum(1, 2, 3, 4, 5)).to.equal(15);
    });

    it("Should return the squared of 4", function() {
        chai.expect(MyMath.square(4)).to.equal(16);
    });

    it("Should return 2^5", function() {
        chai.expect(MyMath.pow(2, 5)).to.equal(32);
    });

    it("Should return double [1, 2, 3, 4, 5]", function() {
        chai.expect(MyMath.double(1, 2, 3, 4, 5)).to.deep.equal([
            2,
            4,
            6,
            8,
            10
        ]);
    });

    it("Should return Pi constant", function() {
        chai.expect(MyMath.PI).to.equal(3.1416);
    });

    it("Should return Radian constant", function() {
        chai.expect(MyMath.RADIAN).to.equal(57.29);
    });

    it("Should return Degree constant", function() {
        chai.expect(MyMath.DEGREE).to.equal(0.0174533);
    });
});
