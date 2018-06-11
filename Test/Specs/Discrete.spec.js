import * as Discrete from "./../../Libs/hjgrx/Discrete/Discrete.module.js";

describe("Discrete Module", function() {
    it("Should return factorial of 5", function() {
        chai.expect(Discrete.factorial(5)).to.equal(120);
    });

    it("Should return permutation of n = 4 and r = 2", function() {
        chai.expect(Discrete.permutation(4, 2)).to.equal(12);
    });
});
