class Animal {
    constructor(name) {
        this.name = name;
    }

    breath() {
        console.log(`${this.name} is breathing`);
    }

    speak() {
        console.log(`${this.name} generic noise`);
    }
};

let animal = new Car('Animal');

animal.breath();
animal.name = 'Otro Animal';
animal.breath();