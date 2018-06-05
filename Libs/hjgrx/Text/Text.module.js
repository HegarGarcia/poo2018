export class TextSplitter {
    constructor(selector) {
        this.elem = document.querySelector(selector);
        this.txt = elem.value;
        if (this.elem === null) throw new Error("Elemento no encontrado");
    }

    splitWords() {
        this.validate();
        return this.split(this.txt, /\r*\n|\r|\s|[.,]/g);
    }

    splitSentences(txt) {
        this.validate();
        return this.split(this.txt, /[.?!,;<>¿¿]\s*/g);
    }

    splitParagraph(txt) {
        this.validate();
        return this.split(this.txt, /\n+|\r+/g);
    }

    split(regexp) {
        this.validate();
        return this.txt.split(regexp).filter(val => val);
    }

    validate() {
        this.txt = elem.value;
        if (typeof this.txt !== "string") throw new Error("Valores no válidos");
    }
}
