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
            return (a / b);
        case "":
            return "ERROR";
    }
}