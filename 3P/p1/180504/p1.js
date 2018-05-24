let rnd = document.querySelector("#rndNum");

function setRnd() {
    rnd.innerHTML = Math.random();
}

setInterval(setRnd, 100);