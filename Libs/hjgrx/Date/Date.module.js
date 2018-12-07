export default class MyDate extends Date {
    static get [Symbol.species]() {
        return Number;
    }

    constructor() {
        super(...arguments);
    }

    month() {
        let month = this.getMonth() + 1;
        return Date.months.get(month);
    }

    week() {
        let day = this.getDay() !== 0 ? this.getDay() + 1 : 7;
        return Date.weekDays.get(day);
    }

    season() {
        let month = this.getMonth() + 1;
        return Date.seasons.get(month);
    }

    isLeap() {
        let year = this.getFullYear();

        return year % 4 !== 0
            ? false
            : year % 100 !== 0
                ? true
                : year % 400 === 0
                    ? true
                    : false;
    }
}

(function() {
    Date.weekDays = new Map([
        [1, "lunes"],
        [2, "martes"],
        [3, "miercoles"],
        [4, "jueves"],
        [5, "viernes"],
        [6, "sabado"],
        [7, "domingo"],
        ["lunes", 1],
        ["martes", 2],
        ["miercoles", 3],
        ["jueves", 4],
        ["viernes", 5],
        ["sabado", 6],
        ["domingo", 7]
    ]);

    Date.months = new Map([
        [1, "enero"],
        [2, "febrero"],
        [3, "marzo"],
        [4, "abril"],
        [5, "mayo"],
        [6, "junio"],
        [7, "julio"],
        [8, "agosto"],
        [9, "septiembre"],
        [10, "octubre"],
        [11, "noviembre"],
        [12, "diciembre"],
        ["enero", 1],
        ["febrero", 2],
        ["marzo", 3],
        ["abril", 4],
        ["mayo", 5],
        ["junio", 6],
        ["julio", 7],
        ["agosto", 8],
        ["septiembre", 9],
        ["octubre", 10],
        ["noviembre", 11],
        ["diciembre", 12]
    ]);

    Date.seasons = new Map([
        [1, "invierno"],
        [2, "invierno"],
        [3, "primavera"],
        [4, "primavera"],
        [5, "primavera"],
        [6, "verano"],
        [7, "verano"],
        [8, "verano"],
        [9, "otoño"],
        [10, "otoño"],
        [11, "otoño"],
        [12, "invierno"],
        ["invierno", 1],
        ["invierno", 2],
        ["primavera", 3],
        ["primavera", 4],
        ["primavera", 5],
        ["verano", 6],
        ["verano", 7],
        ["verano", 8],
        ["otoño", 9],
        ["otoño", 10],
        ["otoño", 11],
        ["invierno", 12]
    ]);

    Date.weekDay = function(weekDay = 1) {
        if (typeof weekDay === "string") {
            weekDay = weekDay
                .toLowerCase()
                .normalize("NFD")
                .replace(/[\u0300-\u036f]/g, "");
        } else {
            weekDay = Number(weekDay.toFixed());
        }

        return this.weekDays.get(weekDay);
    };

    Date.month = function(month = 1) {
        if (typeof month === "string") {
            month = month
                .toLowerCase()
                .normalize("NFD")
                .replace(/[\u0300-\u036f]/g, "");
        } else {
            month = Number(month.toFixed());
        }

        return this.months.get(month);
    };

    Date.season = function(season = 1) {
        if (typeof season === "string") {
            season = season
                .toLowerCase()
                .normalize("NFD")
                .replace(/[\u0300-\u036f]/g, "");
        } else {
            season = Number(season.toFixed());
        }

        return this.seasons.get(season);
    };
})();
