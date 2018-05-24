function equation (n) {

    let sum = 0,
        counter = 0;

    for (let i = 1; counter < 10; i++) {
        if (i % 2 != 0) {
            sum += (1 / (i * (i + 2)));
            console.log(`1/${i * (i + 2)} - ${sum}`);
            counter++;
        }
    }

    return sum;

}

console.log(equation(10));