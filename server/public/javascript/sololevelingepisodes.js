// Aantal afleveringen
const numEpisodes = 12; // Voorbeeld: aantal afleveringen is 12

// Functie om knoppen te maken en naar verschillende links te laten linken
function createButtons() {
    const buttonContainer1 = document.getElementById('buttonContainer1'); // Container voor de eerste 100 afleveringen


    for (let i = 1; i <= numEpisodes; i++) {
        const button = document.createElement('button');
        button.textContent = 'Ep-' + i;
        button.className = 'btn bg-dark text-white rounded-pill btn-outline-light';
        button.style.width = '90px';
        button.style.marginBottom = '10px';

        // Hier kun je de links instellen voor elke knop
        button.addEventListener('click', function() {
            if (i <= 12) {
                window.location.href = 'link-naar-aflevering-' + i + '.html';
            }
        });

        // Voeg knoppen toe aan de juiste container op basis van het afleveringsnummer
        if (i <= 12) {
            buttonContainer1.appendChild(button);
        } 
    }
}

// Roep de functie aan om knoppen te maken
createButtons();