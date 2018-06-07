function fibonacci() {
    let a = 1,
        b = 0,
        c;

    for (let i = 0; i < 10; i++) {
        console.log(a);

        c = a;
        a += b;
        b = c;
    }
}