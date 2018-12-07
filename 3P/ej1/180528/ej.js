// listin.js

let list = [
    "Sunday",
    "Monday",
    "Tuesday"
];

console.log("Items in list");
for (let day in list) {
    console.log(day);
}

console.log("Items in list");
for (let day of list) {
    console.log(day);
}

console.log("Items in this");
for (let thing in this) {
    console.log(thing);
}

console.log("Items in jQuery");
for (let i in $) {
    console.log(i);
}

// journalOf.js
const Journal = [
    "Carrot",
    "Weekend",
    "Bread",
    "Pudding",
    "Exercise"
];

for (let entry of Journal) {
    console.log(`${entry}`);
}

// arrays.js

const arr = Array.from({
    length: 50
});

arr.fill(1);