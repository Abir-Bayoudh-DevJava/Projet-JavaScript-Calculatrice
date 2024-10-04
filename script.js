/* -----JAVASCRIPT-----*/
console.log("bonjour et bienvenue dans cet outil comptable")//Afficher un message dans la console

/* Les chiffres*/

/* 0 */

const buttzero = document.getElementById("zero"); 

const textButtzero = document.getElementById("zero").textContent; 

console.log(zero) 

zero.addEventListener("click", function(){ 

    console.log(textButtzero); 

});
/* 1 */

const buttun = document.getElementById("un"); // je recupère le button via son id

const textButtun = document.getElementById("un").textContent; // je recupère le texte de mon id

console.log(un) //afficher la valeure écrit dans le button

un.addEventListener("click", function(){ // la méthode pour ajouter un évènement à mon button (click)

    console.log(textButtun); 
});

/* 2 */
const buttdeux = document.getElementById("deux"); 

const textButtdeux = document.getElementById("deux").textContent; 

console.log(deux) 

deux.addEventListener("click", function(){ 

    console.log(textButtdeux); 

});
/* 3 */
const butttrois = document.getElementById("trois"); 

const textButttrois = document.getElementById("trois").textContent; 

console.log(trois) 

trois.addEventListener("click", function(){ 

    console.log(textButttrois); 
});
/* 4 */
const buttquatre = document.getElementById("quatre"); 

const textButtquatre = document.getElementById("quatre").textContent; 

console.log(quatre) 

quatre.addEventListener("click", function(){ 

    console.log(textButtquatre); 
});
/* 5 */
const buttcinq = document.getElementById("cinq"); 

const textButtcinq = document.getElementById("cinq").textContent; 

console.log(cinq) 

cinq.addEventListener("click", function(){ 

    console.log(textButtcinq); 
});
/* 6 */

const buttsix = document.getElementById("six"); 

const textButtsix = document.getElementById("six").textContent; 

console.log(six) 

six.addEventListener("click", function(){ 

    console.log(textButtsix); 
});


/* 7 */

const buttSept = document.getElementById("sept"); 

const textButtSept = document.getElementById("sept").textContent; 

console.log(sept) 

sept.addEventListener("click", function(){ 

    console.log(textButtSept); 

});

/* 8 */

const butthuit = document.getElementById("huit"); 

const textButthuit = document.getElementById("huit").textContent; 

console.log(huit) 

huit.addEventListener("click", function(){ 

    console.log(textButthuit); 

});
/* 9 */

const buttneuf = document.getElementById("neuf"); 

const textButtneuf = document.getElementById("neuf").textContent; 

console.log(neuf) 

neuf.addEventListener("click", function(){ 

    console.log(textButtneuf); 
});


// Initialisation des variables
let screen = document.getElementById("Screen"); // Le champ où s'affichent les valeurs et résultats

let operation = ""; // La chaîne d'opérations à effectuer

// Fonction pour ajouter des valeurs dans le champ
function ajouterValeur(valeur) {
    screen.value += valeur;
}

// Fonction pour effacer le champ d'affichage (CE)
document.getElementById("CE").addEventListener("click", function () {
    screen.value = "";
    operation = "";
});

// Fonction pour supprimer le dernier caractère (←)
document.getElementById("supprimer").addEventListener("click", function () {
    screen.value = screen.value.slice(0, -1);
});

// Fonction pour effectuer les calculs
document.getElementById("égale").addEventListener("click", function () {
    try {
        screen.value = eval(screen.value); // Calcul de l'expression
    } catch (e) {
        screen.value = "Erreur"; // Si l'expression n'est pas valide
    }
});

// Ajouter des événements pour chaque bouton numérique et opérateurs
document.getElementById("un").addEventListener("click", function () { ajouterValeur("1"); });
document.getElementById("deux").addEventListener("click", function () { ajouterValeur("2"); });
document.getElementById("trois").addEventListener("click", function () { ajouterValeur("3"); });
document.getElementById("quatre").addEventListener("click", function () { ajouterValeur("4"); });
document.getElementById("cinq").addEventListener("click", function () { ajouterValeur("5"); });
document.getElementById("six").addEventListener("click", function () { ajouterValeur("6"); });
document.getElementById("sept").addEventListener("click", function () { ajouterValeur("7"); });
document.getElementById("huit").addEventListener("click", function () { ajouterValeur("8"); });
document.getElementById("neuf").addEventListener("click", function () { ajouterValeur("9"); });
document.getElementById("zero").addEventListener("click", function () { ajouterValeur("0"); });

// Événements pour les opérateurs
document.getElementById("addition").addEventListener("click", function () { ajouterValeur("+"); });
document.getElementById("soustraction").addEventListener("click", function () { ajouterValeur("-"); });
document.getElementById("multiplication").addEventListener("click", function () { ajouterValeur("*"); });
document.getElementById("division").addEventListener("click", function () { ajouterValeur("/"); });
document.getElementById("virgule").addEventListener("click", function () { ajouterValeur("."); });
document.getElementById("pourcent").addEventListener("click", function () { ajouterValeur("/100"); });


// Fonction pour calculer la moyenne
document.getElementById("moyenne").addEventListener("click", function () {

    // Demande à l'utilisateur d'entrer les nombres séparés par des virgules
    let valeurs = prompt("Entrez des nombres séparés par des virgules pour calculer la moyenne :");

    if (valeurs) {
        // Sépare les nombres entrés par l'utilisateur et les transforme en tableau
        let nombres = valeurs.split(" ").map(Number);

        // Calcule la somme de tous les nombres
        let somme = nombres.reduce((total, num) => total + num, 0);

        // Calcule la moyenne
        let moyenne = somme / nombres.length;

        // Affiche la moyenne dans l'écran
        screen.value = moyenne;
    } else {
        screen.value = "Erreur"; // En cas d'entrée incorrecte
    }
});

