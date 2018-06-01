export class MyDate extends Date {
    static get[Symbol.species]() {
        return Number;
    }

    constructor() {
        super(...arguments);
        this.monthRelation = new Map();
    }

    month() {
        return this.getMonth() + 1;
    }

    week() {}

    season() {
        let month = this.getMonth() + 1;
        let season;

        switch (month) {
            case 3:
            case 4:
            case 5:
                season = "Spring";
                break;
            case 6:
            case 7:
            case 8:
                season = "Summer";
                break;
            case 9:
            case 10:
            case 11:
                season = "Autumn";
                break;
            case 12:
            case 1:
            case 2:
                season = "Winter";
                break;
        }

        return season;
    }

    isLeap() {
        let year = this.getFullYear();
        return year % 4 !== 0 ? false : year % 100 !== 0 ? true : year % 400 === 0 ? true : false;
    }
}