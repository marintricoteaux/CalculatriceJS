/*
Ici sont déclarés toutes les fonctions utilisés
dans le main.js
*/

let screen = document.querySelector("#screen");

function displayToScreen(input) {
    screen.value = input;
}

function calculResult(leftComponent, operator, rightComponent) {
    a = +leftComponent;
    b = +rightComponent;

    switch (operator) {
        case "+":
            return (a + b);
        case "-":
            return (a - b);
        case "*":
            return (a * b);
        case "/":
            if (b !== 0) {
                return (a / b);
            } else {
                return "ERROR";
            }
        case "":
            return "ERROR";
    }
}

function resetInput(leftC = "") {
    input = {
        leftComponent : leftC,
        operator : "",
        rightComponent : "",
        operatorEntered : false,
    };
}