class Car {
    constructor(name) {
        this.name = name;
    }

    drive() {}

    start() {
        console.log(`${this.name} engine started...\n`);
    }

    toString() {
        console.log(`Hi, my name is ${this.name}`);
    }
};

let car = new Car('Hegar');

car.start();