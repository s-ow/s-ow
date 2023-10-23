const textArray = ["Je m'appelle Sacha.", "J'ai 17 ans.", "Je suis au lycée.", "J'aime dev.", "J'aime faire du sport.", "J'aime faire du carspotting."];
const textElement = document.getElementById('animated-text');
let textIndex = 0;
let charIndex = 0;

function typeText() {
    if (charIndex < textArray[textIndex].length) {
        textElement.innerHTML += textArray[textIndex].charAt(charIndex);
        charIndex++;
        setTimeout(typeText, 50);
    } else {
        setTimeout(eraseText, 1000);
    }
}

function eraseText() {
    if (textElement.innerHTML.length > 0) {
        textElement.innerHTML = textElement.innerHTML.slice(0, -1);
        setTimeout(eraseText, 50);
    } else {
        textIndex = (textIndex + 1) % textArray.length;
        charIndex = 0;
        setTimeout(typeText, 500);
    }
}

window.onload = typeText;
