export class TextSplitter {
    constructor(selector) {
        const elem = document.querySelector(selector);
        if (elem === null) throw new Error("Elemento no encontrado");
    }

    splitWords() {
        let txt = this.validate();
        return split(txt, /\r*\n|\r|\s|[.,]/g);
    }

    splitSentences(txt) {
        let txt = this.validate();
        return split(txt, /[.?!,;<>¿¿]\s*/g);
    }

    splitParagraph(txt) {
        let txt = this.validate();
        return split(txt, /\n+|\r+/g);
    }

    split(regexp) {
        let txt = this.this.validate();
        return txt.split(regexp).filter((val) => val);
    }

    validate() {
        const txt = elem.value;
        if (typeof txt !== "string") throw new Error("Valores no válidos");
        return txt;
    };
}