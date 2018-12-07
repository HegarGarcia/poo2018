import NumToRoman from "./../../Libs/hjgrx/Converters/NumberToRoman.module.js";

describe("Number to Letter Module", function() {
    it("Should convert arabic number to letter", function() {
        chai.expect(NumToRoman(1509)).to.be.equal("MDIX");
    });
});
