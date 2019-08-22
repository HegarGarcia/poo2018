import MyDate from "./../../Libs/hjgrx/Date/Date.module.js";

describe("Date Module", function() {
    let date = new MyDate();
    before(() => (date = new MyDate()));

    it("Should return the name of the current month", function() {
        let month = new Date().getMonth() + 1;
        chai.expect(date.month()).to.equal(Date.months.get(month));
    });

    it("Should return the name of the current day of the week", function() {
        let day = new Date().getDay() !== 0 ? new Date().getDay() + 1 : 7;
        chai.expect(date.week()).to.equal(Date.weekDays.get(day));
    });

    it("Should return the name of the current season", function() {
        let month = new Date().getMonth() + 1;
        chai.expect(date.season()).to.equal(Date.seasons.get(month));
    });

    it("Should return the name of a month base on a month number given", function() {
        chai.expect(Date.month(1)).to.equal("enero");
    });

    it("Should return the name of a weekday base on a weekday number given", function() {
        chai.expect(Date.weekDay(1)).to.equal("lunes");
    });

    it("Should return the name of a sason base on a month number given", function() {
        chai.expect(Date.season(1)).to.equal("invierno");
    });
});
