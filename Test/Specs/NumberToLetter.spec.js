import NumToLetter from "./../../Libs/hjgrx/Converters/NumberToLetter.module.js";

describe("Number to Letter Module", function() {
    it("Should convert arabic number to letter", function() {
        chai.expect(NumToLetter(9999999)).to.be.equal(
            "nueve millones novecientos noventa y nueve mil novecientos noventa y nueve"
        );
    });
});
