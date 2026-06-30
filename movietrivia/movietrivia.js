const apiKey = '4480f08bdaabee0f09bd65d6e0a25f12';
const url = `https://api.themoviedb.org/3/search/movie?api_key=${apiKey}&query=lego`;

async function getMovies() {
    const response = await fetch(url);
    const data = await response.json();
    let results = data.results
    results.forEach(function(movie) {
        renderMovie(movie);
    });
    console.log("Example Movie Results:", data.results);
}

getMovies();

const menuBtn = document.querySelector('.menu-btn');
const menuNav = document.querySelector('nav');

menuBtn.addEventListener('click', () => menuNav.classList.toggle('hidden'))

let movieContainer = document.getElementById('movie-container');
let searchBtn = document.querySelector('.searchButton');

searchBtn.addEventListener('click', search);


async function getSearchedMovies() {
    let input = document.querySelector('#searchBar');
    let movieQuery = input.value;
    if (movieQuery.length === 0) {
        return [];
    } else {
        movieQuery = encodeURIComponent(movieQuery);
        const searchURL = `https://api.themoviedb.org/3/search/movie?api_key=${apiKey}&query=${movieQuery}`;
        const response = await fetch(searchURL);
        const data = await response.json();
        return data.results;
    }
};
async function search() {
    let searchResults = await getSearchedMovies();
    console.log(searchResults);
    movieContainer.innerHTML = '';
    searchResults.forEach(function(movie) {
        renderMovie(movie);
    })
};
function renderMovie(movie) {
    let html = movieTemplate(movie);
    movieContainer.innerHTML += html;
};
function movieTemplate(movie) {
    return `<div class="movie">
                <img src='https://image.tmdb.org/t/p/w342${movie.poster_path}' alt='${movie.title} image'>
                <div class='movie-text'>
                    <h1>${movie.title}</h1>
                    <h2><span class='heading'>Overview:</span> ${movie.overview}</h2>
                    <h3><span class='heading'>Release Date:</span> ${movie.release_date}</h3>
                </div>
            </div>`
}