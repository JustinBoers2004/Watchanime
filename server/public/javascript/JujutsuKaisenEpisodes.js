console.log('episode loaded');

const episodeRowOne = document.querySelector('.episode-row1');
const episodeRowTwo = document.querySelector('.episode-row2');
const episodeRowThree = document.querySelector('.episode-row3');
const episodeRowFour = document.querySelector('.episode-row4');
const episodeRowVife = document.querySelector('.episode-row5');
const episodeRowSix = document.querySelector('.episode-row6');


const episodeInfo = document.querySelector('.episode-info');

//fetch data
fetch('/JujustsuKaisenEpisodes')
    .then(myData => myData.json())
    .then(jsonData => showEpisodes(jsonData));



//function to show episodes
function showEpisodes(episodes) {
    console.log(episodes);

    for (let i = 0; i < episodes.length; i++) {
        const episode = episodes[i];
        if (episode < 9) {
            episodeRowOne.appendChild(createCard(episode));
        } else if (episode < 14){
            episodeRowTwo.appendChild(createCard(episode));
        } else if (episode < 22){
            episodeRowThree.appendChild(createCard(episode));
        } else if (episode < 25){
            episodeRowFour.appendChild(createCard(episode));
        } else if (episode < 30){
            episodeRowVife.appendChild(createCard(episode));
        } else {
            episodeRowSix.appendChild(createCard(episode));
        }

    }
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
            <iframe src="${episode.VideoUrl}" frameborder="0"  class="video" allowfullscreen></iframe>
            <h3>${episode.Description}</h3>
            </div>
        </div>`;

    episodeInfo.innerHTML = card;

}

//function scroll button 
function scrollToSection(sectionId) {
    const section = document.getElementById(sectionId);
    if (section) {
        section.scrollIntoView({ behavior: 'smooth' });
    }
}