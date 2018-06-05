export default class Robot {
    constructor(name) {
        this.name = name;
    }

    sayName() {
        console.log(`My name is ${this.name}`);
    }

    talk(text) {
        console.log(text);
    }

    walk() {
        console.log("Walking");
    }

    move() {
        console.log("Moving");
    }
}
