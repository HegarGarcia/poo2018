// @ts-check

import NumberToLetter from "./../Converters/NumberToLetter.module.js";

export default class Cashier {
    constructor() {
        this.tokenList = new Set();
        this.payable = new Map();
    }

    addPayable({ amount, name }) {
        let token = Math.random()
            .toString(36)
            .substr(2);
        let invalid = this.tokenList.has(token);

        while (invalid) {
            token = Math.random()
                .toString(36)
                .substr(2);
            invalid = this.tokenList.has(token);
        }

        this.tokenList.add(token);
        this.payable.set(token, { amount, name, paid: 0, debt: amount });
        return token;
    }

    getAllPayables() {
        return Array.from(this.tokenList);
    }

    pay(token, amount) {
        if (!this.tokenList.has(token)) {
            throw new Error("No hay información sobre token");
        }
        let info = this.payable.get(token);

        if (info.paid === true) throw new Error("Cuenta ya pagada");

        this.payable.set(token, {
            amount: info.amount,
            name: info.name,
            paid:
                info.paid + amount === info.amount ? true : info.paid + amount,
            debt: info.debt - amount < 0 ? 0 : info.debt - amount
        });

        let change = info.debt - amount;

        console.log(`
            Cantidad a pagar:   $${info.amount}
            ---------------------------------
            Pagado:             $${info.paid}
            Debiendo:           $${info.debt}
            ---------------------------------
            Cantidad ingresada: $${amount}
            ${NumberToLetter(amount)}
            Cantidad restante   $${info.debt - amount}
            ---------------------------------
        `);

        if (change > 0) {
            console.log(`
                Cambio: ${change}
                ${NumberToLetter(change)}
            `);

            let changeArr = this._divideToCurrency(change);
            return changeArr;
        }

        return;
    }

    _divideToCurrency(num) {
        const currency = new Map([
            ["Billete 1000 pesos", 1000],
            ["Billete 500 pesos", 500],
            ["Billete 200 pesos", 200],
            ["Billete 100 pesos", 100],
            ["Billete 50 pesos", 50],
            ["Billete 20 pesos", 20],
            ["Moneda 10 pesos", 10],
            ["Moneda 5 pesos", 5],
            ["Moneda 2 pesos", 2],
            ["Moneda 1 peso", 1],
            ["Moneda 50 centavos", 0.5],
            ["Moneda 20 centavos", 0.2]
        ]);

        let result = [];
        let numCopy = num;

        currency.forEach((val, key) => {
            let amount = Math.floor(numCopy / val);
            numCopy -= amount * val;
            result.push(amount > 0 ? `${amount} ${key} ` : "");
        });

        if (numCopy > 0) {
            console.log(`Cantida que no puede ser devuelta: ${numCopy}`);
        }

        return result.filter(val => val);
    }
}
