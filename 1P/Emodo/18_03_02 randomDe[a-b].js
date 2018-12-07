function randomNumber (a, b) {

    let t = 0
    
    for (let i = 0; i < 10; i++) {

        t += Math.floor(Math.random() * b) + a;

    }

}

randomNumber(0, 10);