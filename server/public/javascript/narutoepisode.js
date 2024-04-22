// Aantal afleveringen
const numEpisodes = 100;

// Functie om knoppen te maken en naar verschillende links te laten linken
function createButtons() {
    const buttonContainer = document.getElementById('buttonContainer');

    for (let i = 1; i <= numEpisodes; i++) {
        const button = document.createElement('button');
        button.textContent = 'Ep-' + i;
        button.className = 'btn bg-dark text-white rounded-pill btn-outline-light';
        button.style.width = '90px';
        button.style.marginBottom = '10px';

        // Hier kun je de links instellen voor elke knop
        button.addEventListener('click', function() {
            window.location.href = 'link-naar-aflevering-' + i + '.html';
        });

        buttonContainer.appendChild(button);
    }
}

// Roep de functie aan om knoppen te maken
createButtons();