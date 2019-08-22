let rnds = document.querySelectorAll(".rndNum");

function rnd() {
    rnds.forEach((elem) => elem.innerHTML = Math.random());
}

setInterval(rnd, 1000);