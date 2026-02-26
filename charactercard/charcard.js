const snortleblat = {
    name: 'Snortleblat',
    class: 'Swamp Beast Diplomat',
    level: 5,
    health: 100,
    image: 'snortleblat.webp',
    attacked: function() {
        if (this.health >= 20) {
            this.health -= 20;
        } else {
            alert('Character Died');
        }
    },
    levelUp: function() {
        this.level += 1;
    }
}
const main = document.querySelector('main');

function cardAddition() {
    const article = document.createElement('article');
    article.className = 'card';
    let html = `
    <img src='${snortleblat.image}' class='image' alt='snortleblat img'>
    <p class='name'>${snortleblat.name}</p>
    <div class='stats'>
    <p>Class: ${snortleblat.class}</p>
    <p>Level: ${snortleblat.level}</p>
    <p>Health: ${snortleblat.health}</p>
    <div class='buttons'>
    <button class='attacked'>Attacked</button>
    <button class='levelup'>Level Up</button>
    </div>
    </div>
    `
    article.innerHTML = html;
    main.appendChild(article);
};

cardAddition();

document.querySelector('.attacked').addEventListener('click', snortleblat.attacked);
document.querySelector('.levelup').addEventListener('click', snortleblat.levelUp);