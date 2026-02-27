const snortleblat = {
    name: 'Snortleblat',
    class: 'Swamp Beast Diplomat',
    level: 5,
    health: 100,
    image: 'snortleblat.webp',
    attacked: function() {
        this.health -= 20;
        if (this.health <=0) {
            this.health = 0;
            render();
            alert('Character Died');
        } else {
            render();
        }
    },
    levelUp: function() {
        this.level += 1;
        this.health += 20;
        render();
    }
}
const main = document.querySelector('main');

function render() {
    main.innerHTML = '';
    
    let html = `
    <article class='card'>
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
    </article>
    `
    main.innerHTML = html;
    document.querySelector('.attacked').addEventListener('click', () => snortleblat.attacked());
    document.querySelector('.levelup').addEventListener('click', () => snortleblat.levelUp());
};

render();