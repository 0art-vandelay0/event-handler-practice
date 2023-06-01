function getSetWordValues() {
    //Getters
    const shoutInput = document.getElementById("shoutInput").value;

    //Setters
    document.querySelector("span#shoutWord1").innerText = shoutInput.toUpperCase();
};

function setFormSubEventHandler() {
    let form = document.querySelector("form");
    form.onsubmit = function (event) {
        event.preventDefault();
        getSetWordValues();
        document.querySelector("div#yelling").removeAttribute("class");
    }
};

window.onload = function () {
    setFormSubEventHandler();
};