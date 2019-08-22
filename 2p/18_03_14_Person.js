class Person {
    constructor(first, second) {
        this.first = first;
        this.second = second;
    };

    set setFirst(first) {
        this.first = first;
    };

    get getFullName() {
        return `${this.first} ${this.second}`;
    };

    get getFirst() {
        return this.first;
    };

    get getSecond() {
        return this.second;
    };
};

let person = new Person('Hegar', 'Garcia');

console.log(person.getFirst);
console.log(person.getSecond);
person.setFirst = 'Jose';
console.log(person.getFullName);