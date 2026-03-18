const apiKey = '4480f08bdaabee0f09bd65d6e0a25f12';
const url = `https://api.themoviedb.org/3/movie/popular?api_key=${apiKey}&language=en-US&page=1`;

async function getMovies() {
    const response = await fetch(url);
    const data = await response.json();
    
    console.log("Here is your array of movies:", data.results);
}

getMovies();