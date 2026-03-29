// all following functions are for Trivia page
const triviaContainer = document.getElementById('trivia-load');
const triviaBtn = document.querySelector('.start-game');

triviaBtn.addEventListener('click', playGame);

function playGame() {
    triviaContainer.innerHTML = '';
}
