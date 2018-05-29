export class Cajero {
    constructor({
        dinero
    }) {
        this.total = dinero;
    }

    pagar({
        cntPagar,
        pago
    }) {
        if (isNaN(cntPagar) && isNaN(pago)) {
            throw new Error("Valor(es) ingresado no es númerico");
        }

        // Imprimir cantidad en letra

        if (cntPagar > pago) {
            throw new Error("Pago no es suficiente para cubrir el pago");
        }

        if (cntPagar === pago) {
            console.log("Pagado");
            return Promise.resolve({
                pagado: true
            });
        }

        if (cntPagar < pago) {
            let change = cntPagar - pago;

            return Promise.resolve({
                pagado: true,
                cambio: change
            });
        }

        return Promise.resolve(null);
    }
}