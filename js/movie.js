const url = new URLSearchParams(window.location.search);

const key = "636d550a7f6885de883ca6f8960de574"
const watch = url.get("id");
console.log(watch)


window.onload = fetchData();

function fetchData() {
    if(!watch){
        document.location.href = "index.html"
    }
    fetch(`https://api.themoviedb.org/3/movie/${watch}?api_key=${key}&language=en-US`)
        .then(res => res.json())
        .then(handleData)
}

function handleData(movie) {
    console.log(movie)
    document.querySelector("h1").textContent = movie.original_title;
    console.log(movie.poster_path)

    document.querySelector('#poster').src = 'https://image.tmdb.org/t/p/w500/' + movie.poster_path;
    document.querySelector('#poster').setAttribute("alt", movie.title + " movie");

    document.querySelector('.language').textContent = movie.original_language;
    document.querySelector('.genre').textContent = movie.genres[0].name;
    document.querySelector('.date').textContent = movie.release_date;
    document.querySelector('.hours').textContent = movie.runtime;
    document.querySelector('.overview').textContent = movie.overview;
    document.title = movie.title;

}
