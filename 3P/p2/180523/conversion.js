const c2f = (val) => 1.8 * val + 32;

const f2c = (val) => (val - 32) / 1.8;

(() => {
    const c2f_btn = document.querySelector("#c2f");
    const f2c_btn = document.querySelector("#f2c");

    const text = document.querySelector("#temparature");

    const result_elem = document.querySelector("#result");

    c2f_btn.addEventListener("click", () => {
        const val = text.value;
        const conv_val = c2f(val);

        result_elem.innerHTML = `${val}ºC = ${conv_val}ºF`;
    });

    f2c_btn.addEventListener("click", () => {
        const val = text.value;
        const conv_val = f2c(val);

        result_elem.innerHTML = `${val}ºF = ${conv_val}ºC`;
    });
})()