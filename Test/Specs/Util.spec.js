import * as Util from "./../../Libs/hjgrx/Util/Util.module.js";

describe("Util Module", function() {
    it("Should return true if argument is a function", function() {
        chai.expect(Util.isFunction(() => {})).to.equal(true);
    });

    it("Should return true if argument is an object", function() {
        chai.expect(Util.isObject({})).to.equal(true);
    });

    it("Should return true if argument is a number", function() {
        chai.expect(Util.isNumber(10)).to.equal(true);
    });

    it("Should return true if argument is an array", function() {
        chai.expect(Util.isArray([])).to.equal(true);
    });

    it("Should return a random number", function() {
        chai.expect(Util.random()).to.be.an("number");
    });

    it("Should return a random number between 5 and 20", function() {
        chai.expect(Util.randomAB(5, 20)).to.satisfy(
            num => num >= 5 && num <= 20
        );
    });

    it("Should return a random number between 0 and 50", function() {
        chai.expect(Util.randomN(50)).to.satisfy(num => num >= 0 && num <= 50);
    });
});
