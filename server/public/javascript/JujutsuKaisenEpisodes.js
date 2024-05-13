console.log('episode loaded');

const episodeRow = document.querySelector('.episode-row');
const episodeInfo = document.querySelector('.episode-info');

fetch('/episodes')
    .then(data => data.json())
    .then(jsonData => showEpisodes(jsonData));


    function showEpisodes(episodes) {
        console.log(episodes);
    
        for (let i = 0; i < episodes.length; i++) {
            const episode = episodes[i];
            episodeRow.appendChild(createCard(episode));
        }
    }

function createCard(episode){
    const col = document.createElement('div');
    col.classList.add('col-md-4');
    const card = document.createElement('div');
    card.classList.add('card');
    const button = document.createElement('button');
    button.classList.add('btn', 'btn-primary');
    button.textContent = episode.name;

    button.addEventListener('click', function(){
        fillEpisodeInfoCard(episode);
    });

    col.appendChild(card);
    card.appendChild(button);

    return col;
}

function fillEpisodeInfoCard(episode){

    const card = `
        <div class="card">
            <h2>${episode.Name}</h2>
            <iframe width="560" height="315" src="${episode.VideoUrl}" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
            <h2>${episode.title}</h2>
            <p>${episode.Description}</p>
        </div>`;

    episodeInfo.innerHTML = card;

}
