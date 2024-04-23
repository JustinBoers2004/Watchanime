// Aantal afleveringen
const numEpisodes = 500; // Voorbeeld: aantal afleveringen is 500

// Functie om knoppen te maken en naar verschillende links te laten linken
function createButtons() {
    const buttonContainer1 = document.getElementById('buttonContainer1'); // Container voor de eerste 100 afleveringen
    const buttonContainer2 = document.getElementById('buttonContainer2'); // Container voor de resterende afleveringen
    const buttonContainer3 = document.getElementById('buttonContainer3'); // Container voor de resterende afleveringen
    const buttonContainer4 = document.getElementById('buttonContainer4'); // Container voor de resterende afleveringen
    const buttonContainer5 = document.getElementById('buttonContainer5'); // Container voor de resterende afleveringen

    for (let i = 1; i <= numEpisodes; i++) {
        const button = document.createElement('button');
        button.textContent = 'Ep-' + i;
        button.className = 'btn bg-dark text-white rounded-pill btn-outline-light';
        button.style.width = '90px';
        button.style.marginBottom = '10px';

        // Hier kun je de links instellen voor elke knop
        button.addEventListener('click', function() {
            if (i <= 100) {
                window.location.href = 'link-naar-aflevering-' + i + '.html';
            } else if (i <= 200){
                window.location.href = 'link-naar-aflevering-' + i + '.html'; // Link voor afleveringen na de eerste 100
            } else if (i <= 300){
                window.location.href = 'link-naar-aflevering-' + i + '.html'; // Link voor afleveringen na de eerste 100
            } else if (i <= 400){
                window.location.href = 'link-naar-aflevering-' + i + '.html'; // Link voor afleveringen na de eerste 100
            } else {
                window.location.href = 'link-naar-aflevering-' + i + '.html'; // Link voor afleveringen na de eerste 100
            }
        });

        // Voeg knoppen toe aan de juiste container op basis van het afleveringsnummer
        if (i <= 100) {
            buttonContainer1.appendChild(button);
        } else if (i <= 200){
            buttonContainer2.appendChild(button);
        } else if (i <= 300){
            buttonContainer3.appendChild(button);
        } else if (i <= 400){
            buttonContainer4.appendChild(button);
        } else {
            buttonContainer5.appendChild(button);
        }
    }
}

// Roep de functie aan om knoppen te maken
createButtons();
