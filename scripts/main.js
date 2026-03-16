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
}
let result;

// On écoute tout les évènements
document.addEventListener("click", (event) => {
    // On récupère le bouton
    currentBtn = event.target.closest(".btn");

    // Pour un chiffre
    if (event.target.closest(".number")) {
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
            input = {
                leftComponent : String(result),
                operator : "",
                rightComponent : "",
                operatorEntered : false,
            }
        }
    }
    console.log(input);
})