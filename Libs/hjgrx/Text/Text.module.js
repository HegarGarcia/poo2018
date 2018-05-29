export function splitWords(txt) {
    validate(txt);
    return split(txt, /\r*\n|\r|\s|[.,]/g);
}

export function splitSentences(txt) {
    validate(txt);
    return split(txt, /[.?!,;<>¿¿]\s*/g);
}

export function splitParagraph(txt) {
    validate(txt);
    return split(txt, /\n+|\r+/g);
}

const split = (txt, regexp) => txt.split(regexp).filter((val) => val);
const validate = (txt) => {
    if (typeof txt !== "string") {
        throw new Error("Valores no válidos");
    }
};