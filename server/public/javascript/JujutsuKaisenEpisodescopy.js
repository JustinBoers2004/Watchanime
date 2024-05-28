console.log('episode loaded');

const episodeRowOne = document.querySelector('.episode-row-one');
const episodeRowTwo = document.querySelector('.episode-row-two');
const episodeRowThree = document.querySelector('.episode-row-three');
const episodeRowFour = document.querySelector('.episode-row-four');
const episodeRowVife = document.querySelector('.episode-row-vife');
const episodeRowSix = document.querySelector('.episode-row-six');

const episodeInfo = document.querySelector('.episode-info');

fetch('/JujustsuKaisenEpisodes')
    .then(response => response.json())
    .then(data => showEpisodes(data))
    .catch(error => console.error('Error fetching episodes:', error));

function showEpisodes(episodes) {
    console.log(episodes);

    episodes.forEach(episode => {
        const episodeNumber = episode.Number; // Gebruik de juiste eigenschap hier

        if (episodeNumber < 9) {
            episodeRowOne.appendChild(createCard(episode));
        } else if (episodeNumber < 14) {
            episodeRowTwo.appendChild(createCard(episode));
        } else if (episodeNumber < 22) {
            episodeRowThree.appendChild(createCard(episode));
        } else if (episodeNumber < 24) {
            episodeRowFour.appendChild(createCard(episode));
        } else if (episodeNumber < 29) {
            episodeRowVife.appendChild(createCard(episode));
        } else {
            episodeRowSix.appendChild(createCard(episode));
        }
    });
}

function createCard(episode) {
    const col = document.createElement('div');
    col.classList.add('col-md-2');
    const card = document.createElement('div');
    card.classList.add('card');
    const button = document.createElement('button');
    button.classList.add('btn', 'btn-primary');
    button.textContent = episode.ButtonText;

    button.addEventListener('click', function () {
        fillEpisodeInfoCard(episode);
    });

    col.appendChild(card);
    card.appendChild(button);

    return col;
}

function fillEpisodeInfoCard(episode) {
    const card = `
        <div class="card">
            <h2>${episode.Title}</h2>
            <br>
            <iframe src="${episode.VideoUrl}" frameborder="0" class="video" allowfullscreen></iframe>
            <br>
            <h3>${episode.Description}</h3>
        </div>`;

    episodeInfo.innerHTML = card;
}

// Functie voor scroll-knop
function scrollToSection(sectionId) {
    const section = document.getElementById(sectionId);
    if (section) {
        section.scrollIntoView({ behavior: 'smooth' });
    }
}
