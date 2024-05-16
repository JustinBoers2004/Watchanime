console.log('episode loaded');

const episodeRow = document.querySelector('.episode-row');
const episodeInfo = document.querySelector('.episode-info');


fetch('/JujustsuKaisenEpisodes')
    .then(myData => myData.json())
    .then(jsonData => showEpisodes(jsonData));

function showEpisodes(episodes) {
    console.log(episodes);

    for (let i = 0; i < episodes.length; i++) {
        const episode = episodes[i];
        episodeRow.appendChild(createCard(episode));
    }
}

function createCard(episode) {
    const col = document.createElement('div');
    col.classList.add('col-md-1');
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
            <iframe src="${episode.VideoUrl}" frameborder="0"  class="video" allowfullscreen></iframe>
            <br>
            <h3>${episode.Description}</h3>
            </div>
        </div>`;

    episodeInfo.innerHTML = card;

}