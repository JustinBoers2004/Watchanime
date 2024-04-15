console.log('main loaded');

const container = document.querySelector('.containerEp');

//fetch the data
fetch('')
  .then(myData => myData.json())
  .then(myJsonData => showCards(myJsonData));

//function showcard
function showCards(episodes) {
    console.log(episodes);
    
    let htmlcode = '';
    for (let i = 0; i < episodes.length; i++) {
        const episode = episodes[i];
        htmlcode += createCard(episode);

    }
    container.innerHTML = htmlcode;
  }



function createCard(episode) {
    const cardHtml = `
    <div class="card">
        <p>${card.episode}</p>
        <p>${card.name}</p>
        <button class="btn btn-primary">Button</button>
    </div>
    `;
    return cardHtml;
}
