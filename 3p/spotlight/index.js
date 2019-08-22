window.onload = function () {
    const canvas = document.querySelector("div#canvas");
    const elements = document.querySelectorAll("input[type=\"button\"]");

    elements.forEach((elem) => elem.addEventListener("click", toggleClasses))
}

function toggleClasses() {
    let elemClasses = canvas.classList
    elemClasses.remove(...elemClasses);
    elemClasses.add(this.id)
}