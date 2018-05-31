export class MyNumber extends Number {
    static get[Symbol.species]() {
        return Number;
    }

    isNumber() {
        return !isNaN(this);
    }

    isPositive() {
        this.validate();
        return this >= 0;
    }

    isNegative() {
        this.validate();
        return this <= 0;
    }

    divisibleBy(num) {
        if (isNaN(num)) throw new Error("Valor no válido");
        this.validate();

        return this % num === 0;
    }

    validate() {
        if (isNaN(this)) throw new Error("Valor no válido");
    }
}