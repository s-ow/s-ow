document.addEventListener("DOMContentLoaded", function () {
    const choixElements = document.querySelectorAll('.choix li');
    const chat = document.querySelector('.chat');

    const reponses = {
        "Qui est s-ow ?": "s-ow, Sacha de son prénom, est un lycéen de terminale. Il a 17 ans et ses centres d'intérêt sont essentiellement le sport et le développement, bien qu'il apprécie également la photo et les voitures.",
        "Quelles sont ses compétences ?": "s-ow possède des compétences plutôt variées qu'il travaille depuis plus de 2ans. Pour commencer, il maîtrise totalement les langages simples comme HTML, CSS et Python. Il continue d'apprendre de nouveaux langages comme le Javascript et le React Native pour étendre ses capacités de développement. Il maîtrise également divers outils utiles comme VSCode, GitHub, VirtualBox, Kali Linux...",
        "Quels sont ses projets préférés ?": "s-ow a plusieurs projets à son actif. Son projet le plus utile actuellement est certainement son <a href='https://s-ow.github.io/' target='_blank'>portfolio</a>, mais il a plein d'autres petits projets qu'il aime beaucoup, comme moi, son chatbot. Pour te donner d'autres exemples, il a également créé son propre <a href='https://github.com/s-ow/editeur-de-texte' target='_blank'>éditeur de texte</a> et un <a href='https://s-ow.github.io/meteo/' target='_blank'>site de météo</a> ! <br> Si tu veux en savoir plus, fais un tour sur son <a href='https://github.com/s-ow' target='_blank'>github</a> ou sur son <a href='https://s-ow.github.io/projets' target='_blank'>portfolio</a>",
        "Quels sont ses objectifs ?": "Les objectifs de s-ow sont de s'améliorer tout en prenant du temps pour lui. Il ne considère pas avoir besoin de tout savoir, donc il se concentre sur l'essentiel et se spécialisera pendant ses études. Cependant, il se renseigne tout de même pour avoir quelques bases. Son objectif dans le monde du travail est d'exercer en tant qu'expert en cybersécurité.",
        "Comment le contacter ?": "Vous pouvez contacter s-ow de préférence par messages sur <a href='https://instagram.com/sacha.crq' target='_blank'> son compte Instagram</a>, mais également via e-mail à l'adresse suivante : <a href='mailto:sacha.ow.contact@gmail.com' target='_blank'>sacha.ow.contact@gmail.com</a>. N'hésitez pas !"
    };

    choixElements.forEach(choix => {
        choix.addEventListener('click', () => {
            const choixText = choix.textContent.trim();

            ajouterMessageUtilisateur(choixText);

            const reponseText = reponses[choixText];
            ajouterMessageBot(reponseText);

            ajouterBoutonRetourMenu();
        });
    });

    function ajouterMessageUtilisateur(texte) {
        const messageUtilisateur = document.createElement('li');
        messageUtilisateur.className = 'me';

        const profilDiv = document.createElement('div');
        profilDiv.className = 'profil';
        
        const pseudoSpan = document.createElement('span');
        pseudoSpan.className = 'pseudo';
        pseudoSpan.textContent = 'Vous';
        profilDiv.appendChild(pseudoSpan);

        const msgDiv = document.createElement('div');
        msgDiv.className = 'msg';

        const span = document.createElement('span');
        span.textContent = texte;
        msgDiv.appendChild(span);
        messageUtilisateur.appendChild(profilDiv);
        messageUtilisateur.appendChild(msgDiv);

        chat.appendChild(messageUtilisateur);
    }

    function ajouterMessageBot(texte) {
        const messageBot = document.createElement('li');
        messageBot.className = 'bot';

        const profilDiv = document.createElement('div');
        profilDiv.className = 'profil';
        
        const imgElement = document.createElement('img');
        imgElement.src = 'assets/pics/shadow.png';
        imgElement.alt = 'pfp';
        imgElement.width = '40';

        const pseudoSpan = document.createElement('span');
        pseudoSpan.className = 'pseudo';
        pseudoSpan.textContent = 'Shadow';
        profilDiv.appendChild(imgElement);
        profilDiv.appendChild(pseudoSpan);

        const msgDiv = document.createElement('div');
        msgDiv.className = 'msg';
        msgDiv.innerHTML = texte;
        messageBot.appendChild(profilDiv);
        messageBot.appendChild(msgDiv);

        chat.appendChild(messageBot);
    }

    function ajouterBoutonRetourMenu() {
        const menuInitial = document.querySelector('.initial');
        menuInitial.style.display = 'none';

        const boutonRetour = document.createElement('div');
        const ulElement = document.createElement('ul');
        ulElement.className = 'choix';
        const bouton = document.createElement('li');
        bouton.textContent = 'Retourner au menu';
        bouton.style.width = '40%';
        bouton.addEventListener('click', () => {
            while (chat.children.length > 1) {
                chat.removeChild(chat.lastChild);
                const menuInitial = document.querySelector('.initial');
                menuInitial.style.display = 'block';
            }
        });
        ulElement.appendChild(bouton);
        boutonRetour.appendChild(ulElement);
        chat.appendChild(boutonRetour);
    }
});