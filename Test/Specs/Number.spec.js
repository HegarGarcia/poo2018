import MyNumber from "/Libs/hjgrx/Number/Number.module.js";

describe("Number Module", function() {
    let number;
    before(function() {
        number = new MyNumber(10);
    });

    it("Should have trichotomy", function() {
        chai.expect(Number.trichotomy(2, 2)).to.equal(0);
        chai.expect(Number.trichotomy(2, 1)).to.equal(1);
        chai.expect(Number.trichotomy(1, 2)).to.equal(-1);
    });

    it("Should return if is a number", function() {
        chai.expect(Number.isNumber(10)).to.equal(true);
    });

    it("Should return true if 10 is positive", function() {
        chai.expect(number.isPositive()).to.equal(true);
    });

    it("Should return true if 10 is negative", function() {
        chai.expect(number.isNegative()).to.equal(false);
    });

    it("Should return true if 10 is even", function() {
        chai.expect(number.isEven()).to.equal(true);
    });

    it("Should return true if 10 is odd", function() {
        chai.expect(number.isOdd()).to.equal(false);
    });

    it("Should return true if 10 is divisible by 8", function() {
        chai.expect(number.divisibleBy(8)).to.equal(false);
    });
});
