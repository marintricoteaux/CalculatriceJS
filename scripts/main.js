/*
Script principal, il écoute les évènements de la dom et apelle en conséquence
les fonctions contenues dans script.js
*/

let currentBtn;
let input = {
    leftComponent : "",
    operator : "",
    rightComponent : "",
    operatorEntered : false,
};
let result;
let egalJustClicked = false;

// On écoute tout les évènements clickés
document.addEventListener("click", (event) => {
    // On récupère le bouton
    currentBtn = event.target.closest(".btn");

    // Pour un chiffre, ou un point (nombre décimal)
    if (event.target.closest(".number") || event.target.closest(".dot")) {
        // On vérifie qu'on ai pas tapé juste avant la touche égal
        if (egalJustClicked) {
            egalJustClicked = false;
            resetInput();
        }
        if (!input.operatorEntered) {
            input.leftComponent += currentBtn.innerText;
            displayToScreen(input.leftComponent);
        } else {
            input.rightComponent += currentBtn.innerText;
            displayToScreen(input.rightComponent);
        }
    }
    // Pour un opérateur
    if (event.target.closest(".operator")) {
        // Pas besoin du egalJustClicked, car utile que pour les chiffres
        egalJustClicked = false;

        input.operatorEntered = true;
        input.operator = currentBtn.innerText;
        displayToScreen(input.operator);
    }

    // Avec le bouton "égal", on affiche uniquement le résultat, pas l'opération
    if (event.target.closest(".result")) {
        // On vérifie si le currentInput n'est pas vide
        if (screen.value !== "") {
            result = calculResult(input.leftComponent,input.operator, input.rightComponent);
            displayToScreen(result);
            resetInput(String(result));
        }
        egalJustClicked = true;
    }

    // Avec le bouton reset
    if (event.target.closest(".reset")) {
        resetInput();
        displayToScreen("");
    }
});

// On écoute tout les évènements de touches préssés
document.addEventListener("keydown", (event) => {
    // Pour les nombres
    if (event.key === "0" || 
        event.key === "1" ||
        event.key === "2" ||
        event.key === "3" ||
        event.key === "4" ||
        event.key === "5" ||
        event.key === "6" ||
        event.key === "7" ||
        event.key === "8" ||
        event.key === "9") {
        // On vérifie qu'on ai pas tapé juste avant la touche égal
        if (egalJustClicked) {
            egalJustClicked = false;
            resetInput();
        }
        // Les valeurs des chiffres sont contenues dans event.key
        if (!input.operatorEntered) {
            input.leftComponent += event.key;
            displayToScreen(input.leftComponent);
        } else {
            input.rightComponent += event.key;
            displayToScreen(input.rightComponent);
        }
    }

    // Pour les opérateurs
    if (event.key === "+" ||
        event.key === "-" ||
        event.key === "*" ||
        event.key === "/") {
        // Pas besoin du egalJustClicked, car utile que pour les chiffres
        egalJustClicked = false;

        input.operatorEntered = true;
        input.operator = event.key;
        displayToScreen(input.operator);
    }

    // Avec le bouton "égal"
    if (event.key === "Enter") {
        // On vérifie si le currentInput n'est pas vide
        if (screen.value !== "") {
            result = calculResult(input.leftComponent,input.operator, input.rightComponent);
            displayToScreen(result);
            resetInput(String(result));
        }
        egalJustClicked = true;
    }

    // Avec le bouton "echap" ou "clear"
    if (event.key === "Escape" ||
        event.key === "Clear"
    ) {
        resetInput();
        displayToScreen("");
    }
});