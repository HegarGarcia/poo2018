import * as Series from "./../../Libs/hjgrx/Series/Series.module.js";

describe("Series Module", function() {
    it("Should return an array containing number from 1 to 5", function() {
        chai.expect(Series.rangeAB(1, 5)).to.deep.equal([1, 2, 3, 4, 5]);
    });

    it("Should return an array containing number from 0 to 10", function() {
        chai.expect(Series.rangeN(10)).to.deep.equal([
            0,
            1,
            2,
            3,
            4,
            5,
            6,
            7,
            8,
            9,
            10
        ]);
    });

    it("Should return the first 5 digits of fibonacci series", function() {
        chai.expect(Series.fibonacci(5)).to.deep.equal([1, 1, 2, 3, 5]);
    });
});
