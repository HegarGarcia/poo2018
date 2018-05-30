const mxn2usd = (val) => val * 0.051;
const usd2mxn = (val) => val * 19.59;

window.onload = (function () {
    const usd = document.querySelector("input[name='usd2mxn'");
    const mxn = document.querySelector("input[name='mxn2usd'");

    const mxnTxtBox = document.querySelector("input[name='mxn'");
    const usdTxtBox = document.querySelector("input[name='usd'");

    usd.addEventListener("click", () => {
        const val = usdTxtBox.value;
        const result = usd2mxn(val);

        mxnTxtBox.value = result;
    })

    mxn.addEventListener("click", () => {
        const val = mxnTxtBox.value;
        const result = mxn2usd(val);
        console.log(result);
        usdTxtBox.value = result;
    })
})()