// Affichage
let affichage = document.getElementById("affichage");
// Boutons des opérateurs
let boutonPlus = document.getElementById("boutonPlus");
let boutonMoins = document.getElementById("boutonMoins");
let boutonFois = document.getElementById("boutonFois");
let boutonDiviser = document.getElementById("boutonDiviser");
// Boutons chiffres
let boutonUn = document.getElementById("boutonUn");
let boutonDeux = document.getElementById("boutonDeux");
let boutonTrois = document.getElementById("boutonTrois");
let boutonQuatre = document.getElementById("boutonQuatre");
let boutonCinq = document.getElementById("boutonCinq");
let boutonSix = document.getElementById("boutonSix");
let boutonSept = document.getElementById("boutonSept");
let boutonHuit = document.getElementById("boutonHuit");
let boutonNeuf = document.getElementById("boutonNeuf");
let boutonZero = document.getElementById("boutonZero");
let boutonPoint = document.getElementById("boutonPoint");
// Boutons d'édition du calcul
let boutonRetour = document.getElementById("boutonRetour");
let boutonEffacer = document.getElementById("boutonEffacer");
let boutonEgal = document.getElementById("boutonEgal");

// Event listener des boutons
boutonPlus.addEventListener("click", () => ajoutAffichage("+"));
boutonMoins.addEventListener("click", () => ajoutAffichage("-"));
boutonFois.addEventListener("click", () => ajoutAffichage("*"));
boutonDiviser.addEventListener("click", () => ajoutAffichage("/"));
boutonUn.addEventListener("click", () => ajoutAffichage("1"));
boutonDeux.addEventListener("click", () => ajoutAffichage("2"));
boutonTrois.addEventListener("click", () => ajoutAffichage("3"));
boutonQuatre.addEventListener("click", () => ajoutAffichage("4"));
boutonCinq.addEventListener("click", () => ajoutAffichage("5"));
boutonSix.addEventListener("click", () => ajoutAffichage("6"));
boutonSept.addEventListener("click", () => ajoutAffichage("7"));
boutonHuit.addEventListener("click", () => ajoutAffichage("8"));
boutonNeuf.addEventListener("click", () => ajoutAffichage("9"));
boutonZero.addEventListener("click", () => ajoutAffichage("0"));
boutonPoint.addEventListener("click", () => ajoutAffichage("."));
boutonRetour.addEventListener("click", () => retourAffichage());
boutonEffacer.addEventListener("click", () => effacemmentAffichage());
boutonEgal.addEventListener("click", () => calcul());

// Fonction d'ajout à l'affichage du calcul
function ajoutAffichage(char) {
    let calcul = affichage.innerText;
    let isNumerique = verifNumerique(char);
    let isDernierCharNum = verifNumerique(affichage.innerText.slice(-1));
    if (calcul === "Entrez un calcul" && !isNumerique) {
    } else if (calcul === "Entrez un calcul") {
        affichage.innerText = char;
    } else if (!isNumerique && !isDernierCharNum) {
    } else {
        controleDecimal(char)
    }
}

// Fonction de contrôle des décimaux
function controleDecimal(char) {
    let regexExpression = /(?:(?:^|[-+_*/])(?:\s*-?\d+(\.\d+)?(?:[eE][+-]?\d+)?\s*))+$/;
    let calcul = affichage.innerText;
    let test = calcul + char;
    occurencePoint = test.split('.').length - 1;
    if (occurencePoint > 1) {
        let temp = test
        valid = regexExpression.test(test);
        if (valid) {
            affichage.innerText = calcul + char;
        } else {
            affichage.innerText = temp;
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