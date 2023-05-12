// Affichage
let affichage = document.getElementById("affichage");
let affichageTemp = document.getElementById("affichageTemp");
// Event listener des boutons
// Boutons des opérateurs
document.getElementById("boutonPlus").addEventListener("click", () => ajoutAffichage("+"));
document.getElementById("boutonMoins").addEventListener("click", () => ajoutAffichage("-"));
document.getElementById("boutonFois").addEventListener("click", () => ajoutAffichage("*"));
document.getElementById("boutonDiviser").addEventListener("click", () => ajoutAffichage("/"));
// Boutons chiffres
document.getElementById("boutonUn").addEventListener("click", () => ajoutAffichage("1"));
document.getElementById("boutonDeux").addEventListener("click", () => ajoutAffichage("2"));
document.getElementById("boutonTrois").addEventListener("click", () => ajoutAffichage("3"));
document.getElementById("boutonQuatre").addEventListener("click", () => ajoutAffichage("4"));
document.getElementById("boutonCinq").addEventListener("click", () => ajoutAffichage("5"));
document.getElementById("boutonSix").addEventListener("click", () => ajoutAffichage("6"));
document.getElementById("boutonSept").addEventListener("click", () => ajoutAffichage("7"));
document.getElementById("boutonHuit").addEventListener("click", () => ajoutAffichage("8"));
document.getElementById("boutonNeuf").addEventListener("click", () => ajoutAffichage("9"));
document.getElementById("boutonZero").addEventListener("click", () => ajoutAffichage("0"));
document.getElementById("boutonPoint").addEventListener("click", () => ajoutAffichage("."));
// Boutons d'édition du calcul
document.getElementById("boutonRetour").addEventListener("click", () => retourAffichage());
document.getElementById("boutonEffacer").addEventListener("click", () => effacemmentAffichage());
document.getElementById("boutonEgal").addEventListener("click", () => calcul());

//Event listener clavier
document.addEventListener('keydown', (event) => {
    let key = event.key;
    console.log(key);
    if (!isNaN(key) || key === "+" || key === "-" || key === "*" || key === "/" || key === ".") {
        ajoutAffichage(key)
    }
    else if (key === "Backspace") {
        retourAffichage()
    }
    else if (key === "Delete") {
        effacemmentAffichage()
    }
    else if (key === "=" || key === "Enter") {
        calcul()
    }
});

// Fonction d'ajout à l'affichage du calcul
function ajoutAffichage(char) {
    let calcul = affichage.innerText;
    let isNumerique = verifNumerique(char);
    let isDernierCharNum = verifNumerique(affichage.innerText.slice(-1));
    if (calcul === "Entrez un calcul" && !isNumerique) {
    } else if (calcul === "Entrez un calcul") {
        affichage.innerText = char;
    } else if (!isNumerique && !isDernierCharNum) {
    } else if (calcul === "/!\\ Erreur /!\\") {
        affichage.innerText = char;        
    } else {
        controleDecimal(char)
    }
}

// Fonction de contrôle des décimaux
function controleDecimal(char) {
    let regexExpression = /^(?:[+-]?(?:\d+|\d*\.\d+)(?:[eE][+-]?\d+)?(?:\s*[-+*/]\s*[+-]?(?:\d+|\d*\.\d+)(?:[eE][+-]?\d+)?)*\s*)$/;
    let calcul = affichage.innerText;
    let test = calcul + char;
    occurencePoint = test.split('.').length - 1;
    if (occurencePoint > 1) {
        valid = regexExpression.test(test);
        if (valid) {
            affichage.innerText = test;
        } else {
            affichage.innerText = "/!\\ Erreur /!\\";
        }
    } else {
        affichage.innerText = calcul + char;
    }
}

// Fonction de vérification des caractères numérique
function verifNumerique(char) {
    return !isNaN(char);
}

// Fonction retour arrière de l'affichage
function retourAffichage() {
    let calcul = affichage.innerText;
    affichage.innerText = calcul.slice(0, -1);
}

// Fonction d'effacemment du calcul
function effacemmentAffichage() {
    affichage.innerText = "Entrez un calcul";
}

//fonction de calcul
function calcul() {
    let calcul = [...affichage.innerText];
    let isDernierCharNum = verifNumerique(calcul.slice(-1));
    if (!isDernierCharNum) {
        calcul.pop()
    }
    let regexExpression = /(?:(?:^|[-+_*/])(?:\s*-?\d+(\.\d+)?(?:[eE][+-]?\d+)?\s*))+$/;
    let expression = affichage.innerText;
    valid = regexExpression.test(expression);
    if (valid) {
        let resultat = eval(expression);
        affichage.innerText = resultat;
    }
}