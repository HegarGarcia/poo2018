export default class Fraction {
    constructor(numerador = 1, denominador = 1) {
        numerador = Number(numerador);
        denominador = Number(denominador);

        if (
            !this.constructor.isValid(numerador) ||
            !this.constructor.isValid(denominador)
        )
            throw "Datos inválidos";

        let gcd = this.constructor.euclides(numerador, denominador);

        this._numerador = numerador / gcd;
        this._denominador = numerador == 0 ? 0 : denominador / gcd;
    }

    static isValid(num) {
        if (!isNaN(num) && Number.isInteger(num)) return true;

        return false;
    }

    static euclides(a, b) {
        if (!b) return Math.abs(a);

        return this.euclides(b, a % b);
    }

    static isFraction(frac) {
        return frac instanceof Fraction;
    }

    equals(fraction) {
        if (!(fraction instanceof Fraction)) throw new Error("Valor no válido");
        return (
            this._numerador === fraction._numerador &&
            this._denominador === fraction._denominador
        );
    }

    toNumber() {
        return Number(this._numerador / this._denominador);
    }

    add(frac) {
        this.constructor.isFraction(frac);

        let numerador = this._numerador,
            denominador = this._denominador;

        if (this._denominador === frac._denominador)
            numerador += frac._numerador;
        else {
            numerador =
                this._numerador * frac._denominador +
                frac._numerador * this._denominador;
            denominador *= frac._denominador;
        }

        return new Fraction(numerador, denominador);
    }

    subtract(frac) {
        this.constructor.isFraction(frac);

        let numerador = this._numerador,
            denominador = this._denominador;

        if (this._denominador === frac._denominador)
            numerador -= frac._numerador;
        else {
            numerador =
                this._numerador * frac._denominador -
                frac._numerador * this._denominador;
            denominador *= frac._denominador;
        }

        return new Fraction(numerador, denominador);
    }

    multiply(frac) {
        this.constructor.isFraction(frac);

        let numerador = this._numerador * frac._numerador,
            denominador = this._denominador * frac._denominador;

        return new Fraction(numerador, denominador);
    }

    divide(frac) {
        this.constructor.isFraction(frac);

        let numerador = this._numerador * frac._denominador,
            denominador = this._denominador * frac._numerador;

        return new Fraction(numerador, denominador);
    }
}
