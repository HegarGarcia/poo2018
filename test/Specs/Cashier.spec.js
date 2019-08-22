import Cashier from "/Libs/hjgrx/Cashier/Cashier.module.js";

describe("Cashier Module", function() {
    let cashier;
    let token;
    before(function() {
        cashier = new Cashier();
    });

    it("Should add payable", function() {
        token = cashier.addPayable({ amount: 1000, name: "Test" });
        chai.expect(token).to.be.an("string");
    });

    it("Should return all payable", function() {
        chai.expect(cashier.getAllPayables()).to.be.an("array");
    });

    it("Should pay a payable", function() {
        let change = cashier.pay(token, 500);
        chai.expect(change).to.be.an("array");
    });

    it("Should convert number to currency", function() {
        let currency = cashier._divideToCurrency(1599.5);
        chai.expect(currency).to.deep.equal([
            "1 Billete 1000 pesos ",
            "1 Billete 500 pesos ",
            "1 Billete 50 pesos ",
            "2 Billete 20 pesos ",
            "1 Moneda 5 pesos ",
            "2 Moneda 2 pesos ",
            "1 Moneda 50 centavos "
        ]);
    });
});
