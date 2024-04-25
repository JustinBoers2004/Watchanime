// Aantal afleveringen
const numEpisodes = 500; // Voorbeeld: aantal afleveringen is 500

// Functie om knoppen te maken en naar verschillende links te laten linken
function createButtons() {
    const buttonContainer1 = document.getElementById('buttonContainerOne'); // Container voor de eerste 100 afleveringen
    const buttonContainer2 = document.getElementById('buttonContainerTwo'); // Container voor de resterende afleveringen
    const buttonContainer3 = document.getElementById('buttonContainerThree'); // Container voor de resterende afleveringen
    const buttonContainer4 = document.getElementById('buttonContainerFour'); // Container voor de resterende afleveringen
    const buttonContainer5 = document.getElementById('buttonContainerVife'); // Container voor de resterende afleveringen
    const buttonContainer6 = document.getElementById('buttonContainerSix'); // Container voor de eerste 100 afleveringen
    const buttonContainer7 = document.getElementById('buttonContainerSeven'); // Container voor de resterende afleveringen
    const buttonContainer8 = document.getElementById('buttonContainerEight'); // Container voor de resterende afleveringen
    const buttonContainer9 = document.getElementById('buttonContainerNine'); // Container voor de resterende afleveringen
    const buttonContainer10 = document.getElementById('buttonContainerThen'); // Container voor de resterende afleveringen
    const buttonContainer11 = document.getElementById('buttonContainerEleven'); // Container voor de eerste 100 afleveringen
    const buttonContainer12 = document.getElementById('buttonContainerTwelve'); // Container voor de resterende afleveringen
    const buttonContainer13 = document.getElementById('buttonContainerThirteen'); // Container voor de resterende afleveringen
    const buttonContainer14 = document.getElementById('buttonContainerFourteen'); // Container voor de resterende afleveringen
    const buttonContainer15 = document.getElementById('buttonContainerFifteen'); // Container voor de resterende afleveringen
    const buttonContainer16 = document.getElementById('buttonContainerSixteen'); // Container voor de eerste 100 afleveringen
    const buttonContainer17 = document.getElementById('buttonContainerSeventeen'); // Container voor de resterende afleveringen
    const buttonContainer18 = document.getElementById('buttonContainerEighteen'); // Container voor de resterende afleveringen
    const buttonContainer19 = document.getElementById('buttonContainerNineteen'); // Container voor de resterende afleveringen
    const buttonContainer20 = document.getElementById('buttonContainerTwenty'); // Container voor de resterende afleveringen
    const buttonContainer21 = document.getElementById('buttonContainerTwentyone'); // Container voor de eerste 100 afleveringen
    const buttonContainer22 = document.getElementById('buttonContainerTwentytwo'); // Container voor de resterende afleveringen
    const buttonContainer23 = document.getElementById('buttonContainerTwentythree'); // Container voor de resterende afleveringen

    for (let i = 1; i <= numEpisodes; i++) {
        const button = document.createElement('button');
        button.textContent = 'Ep-' + i;
        button.className = 'btn bg-dark text-white rounded-pill btn-outline-light';
        button.style.width = '90px';
        button.style.marginBottom = '10px';

        // Hier kun je de links instellen voor elke knop
        button.addEventListener('click', function() {
            if (i <= 32) {
                window.location.href = 'link-naar-aflevering-' + i + '.html';
            } else if (i <= 53){
                window.location.href = 'link-naar-aflevering-' + i + '.html'; // Link voor afleveringen na de eerste 100
            } else if (i <= 71){
                window.location.href = 'link-naar-aflevering-' + i + '.html'; // Link voor afleveringen na de eerste 100
            } else if (i <= 88){
                window.location.href = 'link-naar-aflevering-' + i + '.html'; // Link voor afleveringen na de eerste 100
            } else if (i <= 71){
                window.location.href = 'link-naar-aflevering-' + i + '.html'; // Link voor afleveringen na de eerste 100
            } else if (i <= 112){
                window.location.href = 'link-naar-aflevering-' + i + '.html'; // Link voor afleveringen na de eerste 100
            } else if (i <= 126){
                window.location.href = 'link-naar-aflevering-' + i + '.html'; // Link voor afleveringen na de eerste 100 
            } else if (i <= 133){
                window.location.href = 'link-naar-aflevering-' + i + '.html'; // Link voor afleveringen na de eerste 100    
            } else if (i <= 143){
                window.location.href = 'link-naar-aflevering-' + i + '.html'; // Link voor afleveringen na de eerste 100       
            } else if (i <= 151){
                window.location.href = 'link-naar-aflevering-' + i + '.html'; // Link voor afleveringen na de eerste 100
            } else if (i <= 175){
                window.location.href = 'link-naar-aflevering-' + i + '.html'; // Link voor afleveringen na de eerste 100        
            } else {
                window.location.href = 'link-naar-aflevering-' + i + '.html'; // Link voor afleveringen na de eerste 100
            }
        });

        // Voeg knoppen toe aan de juiste container op basis van het afleveringsnummer
        if (i <= 32) {
            buttonContainer1.appendChild(button);
        } else if (i <= 53){
            buttonContainer2.appendChild(button);
        } else if (i <= 71){
            buttonContainer3.appendChild(button);
        } else if (i <= 88){
            buttonContainer4.appendChild(button);
        } else if (i <= 112){
            buttonContainer5.appendChild(button);
        } else if (i <= 126){
            buttonContainer6.appendChild(button);
        } else if (i <= 133){
            buttonContainer7.appendChild(button);
        } else if (i <= 143){
            buttonContainer8.appendChild(button);
        } else if (i <= 151){
            buttonContainer9.appendChild(button);
        } else if (i <= 175){
            buttonContainer10.appendChild(button);
        } else if (i <= 196){
            buttonContainer11.appendChild(button);
        } else if (i <= 214){
            buttonContainer12.appendChild(button);
        } else if (i <= 256){
            buttonContainer13.appendChild(button);
        } else if (i <= 260){
            buttonContainer14.appendChild(button);
        } else if (i <= 321){
            buttonContainer15.appendChild(button);
        } else if (i <= 375){
            buttonContainer16.appendChild(button);
        } else if (i <= 431){
            buttonContainer17.appendChild(button);
        } else if (i <= 450){
            buttonContainer18.appendChild(button);
        } else if (i <= 479){
            buttonContainer19.appendChild(button);
        } else if (i <= 483){
            buttonContainer20.appendChild(button);
        } else if (i <= 488){
            buttonContainer21.appendChild(button);
        } else if (i <= 493){
            buttonContainer22.appendChild(button);
        } else {
            buttonContainer23.appendChild(button);
        }
    }
}

// Roep de functie aan om knoppen te maken
createButtons();
