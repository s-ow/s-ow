const textArray = ["Je m'appelle Sacha.", "J'ai 17 ans.", "Je suis au lycée.", "J'aime dev.", "J'aime faire du sport.", "J'aime faire du carspotting."];
const textElement = document.getElementById('animated-text');
let textIndex = 0;
let charIndex = 0;

function typeText() {
    if (charIndex < textArray[textIndex].length) {
        textElement.innerHTML += textArray[textIndex].charAt(charIndex);
        charIndex++;
        setTimeout(typeText, 50); // Délai entre chaque caractère (ajustez selon vos préférences)
    } else {
        // Efface le texte actuel
        setTimeout(eraseText, 1000); // Temps d'affichage du texte avant effacement (1 seconde ici)
    }
}

function eraseText() {
    if (textElement.innerHTML.length > 0) {
        textElement.innerHTML = textElement.innerHTML.slice(0, -1);
        setTimeout(eraseText, 50); // Délai entre chaque caractère pendant l'effacement
    } else {
        // Passe au texte suivant
        textIndex = (textIndex + 1) % textArray.length; // Boucle à travers le tableau
        charIndex = 0;
        setTimeout(typeText, 500); // Temps d'attente avant de commencer à taper le texte suivant (0,5 seconde ici)
    }
}

// Appelez la fonction pour commencer l'animation lorsque la page est chargée
window.onload = typeText;
