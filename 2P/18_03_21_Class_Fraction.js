class Fraction {
    constructor(numerador, denominador) {
        numerador = Number(numerador);
        denominador = Number(denominador);

        if (!this.constructor.isValid(numerador) || !this.constructor.isValid(denominador))
            throw 'Datos inválidos';

        let gcd = this.constructor.euclides(numerador, denominador);

        this._numerador = numerador / gcd;
        this._denominador = numerador == 0 ? 0 : denominador / gcd;
    }

    static isValid(num) {
        if (!isNaN(num) && Number.isInteger(num))
            return true;
            
        return false;
    }

    static euclides(a, b) {
        if (!b)
            return Math.abs(a);

        return this.euclides(b, a % b);
    }

    static checkInstance(frac) {
        if (!(frac instanceof Fraction))
            throw 'Argumento no es Fracción';

        return true;
    }

    print() {
        return this._numerador == 1 && this._denominador == 1 ? 1 : this._numerador == 0 && this._denominador == 0 ? 0 : `${this._numerador}/${this._denominador}`;
    }

    add(frac) {
        this.constructor.checkInstance(frac);

        let numerador = this._numerador,
            denominador = this._denominador;
        
        if (this._denominador === frac._denominador)
            numerador += frac._numerador;
        else {
            numerador = (this._numerador * frac._denominador) + (frac._numerador * this._denominador);
            denominador *= frac._denominador;
        }

        return new Fraction(numerador, denominador);
    }

    subtract(frac) {
        this.constructor.checkInstance(frac);

        let numerador = this._numerador,
            denominador = this._denominador;

        if (this._denominador === frac._denominador)
            numerador -= frac._numerador;
        else {
            numerador = (this._numerador * frac._denominador) - (frac._numerador * this._denominador);
            denominador *= frac._denominador;
        }
        
        return new Fraction(numerador, denominador);
    }

    multiply(frac) {
        this.constructor.checkInstance(frac);
        
        let numerador = this._numerador * frac._numerador,
            denominador = this._denominador * frac._denominador;
        
        return new Fraction(numerador, denominador);
    }

    divide(frac) {
        this.constructor.checkInstance(frac);

        let numerador = this._numerador * frac._denominador,
            denominador = this._denominador * frac._numerador;
        
        return new Fraction(numerador, denominador);
    }
}

module.exports = Fraction;