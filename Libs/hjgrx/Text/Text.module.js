export default class TextSplitter {
    constructor(selector) {
        this.elem = document.querySelector(selector);
        if (this.elem === null) throw new Error("Elemento no encontrado");
    }

    splitWords() {
        return this.split(/\r*\n|\r|\s|[.,]/g);
    }

    splitSentences() {
        return this.split(/[.?!,;<>¿¿]\s*/g);
    }

    splitParagraph() {
        return this.split(/\n+|\r+/g);
    }

    split(regexp) {
        let txt = this.validate();
        return txt.split(regexp).filter(val => val);
    }

    isEmpty() {
        let txt = this.validate();
        return txt === "";
    }

    validate() {
        const txt = this.elem.value;
        if (typeof txt !== "string") throw new Error("Valores no válidos");
        return txt;
    }
}
