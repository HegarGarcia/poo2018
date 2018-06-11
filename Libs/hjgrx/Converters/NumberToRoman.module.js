export function NumberToRoman(num) {
    const ROMAN = new Map([
        ["M", 1000],
        ["CM", 900],
        ["D", 500],
        ["CD", 400],
        ["C", 100],
        ["XC", 90],
        ["L", 50],
        ["XL", 40],
        ["X", 10],
        ["IX", 9],
        ["V", 5],
        ["IV", 4],
        ["I", 1]
    ]);

    let result = "";
    let numCopy = num;

    ROMAN.forEach((val, key) => {
        let amount = Math.floor(numCopy / val);
        numCopy -= amount * val;
        result += key.repeat(amount);
    });

    return result;
}
