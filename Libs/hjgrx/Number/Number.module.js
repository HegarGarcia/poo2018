export default class MyNumber extends Number {
    static get [Symbol.species]() {
        return Number;
    }

    isPositive() {
        this.validate();
        return this >= 0;
    }

    isNegative() {
        this.validate();
        return this <= 0;
    }

    isEven() {
        this.validate();
        return this % 2 === 0;
    }

    isOdd() {
        this.validate();
        return this % 2 !== 0;
    }

    divisibleBy(num) {
        this.validate();
        return this % num === 0;
    }

    validate() {
        if (isNaN(this)) throw new Error("Valor no válido");
    }
}

(function() {
    Number.trichotomy = function(a, b) {
        if (isNaN(a) && isNaN(b)) throw new Error("Valores no son números");
        return a === b ? 0 : a > b ? 1 : -1;
    };

    Number.isNumber = function(num) {
        return typeof num === "number";
    };
})();
