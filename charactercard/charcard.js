const snortleblat = {
    name: 'Snortleblat',
    class: 'Swamp Beast Diplomat',
    level: 5,
    health: 100,
    image: 'snortleblat.webp',
    attacked: function() {
        if (health >= 20) {
            health -= 20;
        } else {
            alert('Character Died');
        }
    },
    levelUp: function() {
        level += 1;
    }
}