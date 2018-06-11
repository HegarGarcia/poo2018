import TextSplitter from "./../../Libs/hjgrx/Text/Text.module.js";

describe("Text Module", function() {
    let textspliter;
    before(() => {
        textspliter = new TextSplitter("#text_module");
        document.querySelector("#text_module").value =
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed in fringilla ipsum, eu faucibus justo. In id sollicitudin eros, at ultrices lectus. In non scelerisque erat. Morbi vitae bibendum erat. Pellentesque non erat sapien. Curabitur ac dignissim urna. Curabitur molestie urna nunc, et volutpat justo finibus at. Suspendisse faucibus pulvinar risus in ultricies. In vehicula nec nulla eu cursus. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Suspendisse potenti. Ut rhoncus enim ac pretium efficitur. Nulla quis egestas massa, quis bibendum velit. Nullam libero tortor, dictum egestas sapien id, venenatis condimentum libero. Maecenas vel pharetra orci. Nulla bibendum euismod pharetra.";
    });

    it("Should return an array of all words in the text", function() {
        chai.expect(textspliter.splitWords()).to.be.an("array");
    });

    it("Should return an array of all sentences in the text", function() {
        chai.expect(textspliter.splitSentences()).to.be.an("array");
    });

    it("Should return an array of all paragraphs in the text", function() {
        chai.expect(textspliter.splitParagraph()).to.be.an("array");
    });

    it("Should return false if there is text in the text area", function() {
        chai.expect(textspliter.isEmpty()).to.equal(false);
    });
});
