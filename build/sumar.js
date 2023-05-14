"use strict";
function recolector() {
    let numerotest = document.getElementById("uno");
    let numero = parseInt(numerotest.value);
    let numero2test = document.getElementById("dos");
    let numero2 = parseInt(numero2test.value);
    return { numero2, numero };
}
let funcionSumar = () => {
    let variable = recolector();
    let lethuno = document.getElementById("divcontenedor");
    if (Number.isInteger(variable.numero) && Number.isInteger(variable.numero2)) {
        lethuno.style.fontSize = "100px";
        lethuno.textContent = (variable.numero + variable.numero2).toString();
    }
    else {
        lethuno.style.fontSize = "50px";
        lethuno.textContent = "ingresa datos";
    }
};
let funcionRestar = () => {
    let variable = recolector();
    let lethuno = document.getElementById("divcontenedor");
    if (Number.isInteger(variable.numero) && Number.isInteger(variable.numero2)) {
        lethuno.style.fontSize = "100px";
        lethuno.textContent = (variable.numero - variable.numero2).toString();
    }
    else {
        lethuno.style.fontSize = "50px";
        lethuno.textContent = "ingresa datos";
    }
};
let funcionDividir = () => {
    let variable = recolector();
    let lethuno = document.getElementById("divcontenedor");
    if (Number.isInteger(variable.numero) && Number.isInteger(variable.numero2)) {
        if (variable.numero2 === 0) {
            lethuno.style.fontSize = "45px";
            lethuno.textContent = "error by zero";
        }
        else {
            lethuno.textContent = (variable.numero / variable.numero2).toString();
            lethuno.style.fontSize = "100px";
        }
    }
    else {
        lethuno.style.fontSize = "50px";
        lethuno.textContent = "ingresa datos";
    }
};
let funcionMultiplicar = () => {
    let variable = recolector();
    let lethuno = document.getElementById("divcontenedor");
    if (Number.isInteger(variable.numero) && Number.isInteger(variable.numero2)) {
        lethuno.style.fontSize = "100px";
        lethuno.textContent = (variable.numero * variable.numero2).toString();
    }
    else {
        lethuno.style.fontSize = "50px";
        lethuno.textContent = "ingresa datos";
    }
};
