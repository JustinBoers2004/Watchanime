console.log('episode loaded');

const episodeRow = document.querySelector('.episode-row');
const episodeInfo = document.querySelector('.episode-info');

fetch('/JujustsuKaisenEpisodes')
    .then(data => data.json())
    .then(jsonData => showEpisodes(jsonData));


function showEpisodes(JujustsuKaisenEpisodes) {
    console.log(JujustsuKaisenEpisodes);

    for (let i = 0; i < JujustsuKaisenEpisodes.length; i++) {
        const JujustsuKaisenEpisode = JujustsuKaisenEpisodes[i];
        episodeRow.appendChild(createCard(JujustsuKaisenEpisode));
    }
}

function createCard(JujustsuKaisenEpisode){
    const col = document.createElement('div');
    col.classList.add('col-md-4');
    const card = document.createElement('div');
    card.classList.add('card');
    const button = document.createElement('button');
    button.classList.add('btn', 'btn-primary');
    button.textContent = episode.name;

    button.addEventListener('click', function(){
        fillEpisodeInfoCard(JujustsuKaisenEpisode);
    });

    col.appendChild(card);
    card.appendChild(button);

    return col;
}

function fillEpisodeInfoCard(JujustsuKaisenEpisode){

    const card = `
        <div class="card">
            <h2>${Name}</h2>
            ${VideoUrl}
            <h2>${title}</h2>
            <p>${Description}</p>
        
        </div>`;

    episodeInfo.innerHTML = card;

}
