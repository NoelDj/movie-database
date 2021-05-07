const key = "636d550a7f6885de883ca6f8960de574"



const url = new URLSearchParams(window.location.search);

const watch = url.get("watch");

if(!watch){
    document.location.href = "index.html?watch=classics"
    console.log(2)
}
function capitalizeFirstLetter(string) {
  return string.charAt(0).toUpperCase() + string.slice(1);
}
if (watch) {
    document.title = capitalizeFirstLetter(watch) + " Movies";
}



console.log(capitalizeFirstLetter(watch))

document.querySelector("h1").textContent = `${watch} movies`;

window.onload = fetchData;
i = 1

function fetchData() {
    if (watch == "classics") {
        const watch = "597/recommendations";
        document.title = "Classic Movies";
        for(i=1;i<=2;i++){
            console.log(`https://api.themoviedb.org/3/movie/${watch}?api_key=${key}&language=en-US&page=${i}`)
            fetch(`https://api.themoviedb.org/3/movie/${watch}?api_key=${key}&language=en-US&page=${i}`)
            .then(res => res.json())
            .then(handleData)
        }

    } else {
        for(i=1;i<=3;i++){
    fetch(`https://api.themoviedb.org/3/movie/${watch}?api_key=${key}&language=en-US&page=${i}`)
        .then(res => res.json())
        .then(handleData)
    }}
}

function handleData(data) {
    data.results.forEach(loopMovies);
    data.results.forEach(create);

}

function create(movie){
    console.log(movie.title)
}

function loopMovies(movie) {

    const template = document.querySelector("template").content
    const copy = template.cloneNode(true)
    const main = document.querySelector("main")


    if(movie.poster_path){
        copy.querySelector('img').src = 'https://image.tmdb.org/t/p/w500/' + movie.poster_path;
    }

    copy.querySelector('.title').textContent = movie.title;
    copy.querySelector('.rating').textContent = Math.round(movie.vote_average * 100) / 100;
    copy.querySelector('a').href += movie.id;



    main.appendChild(copy);


}

const searchBar = document.forms['search-movies'].querySelector("input");

searchBar.addEventListener("keyup", function (e) {
            const term = e.target.value.toLowerCase();


            const movies = document.querySelectorAll('.title');
            Array.from(movies).forEach(movie => {
                console.log(movie.textContent)
                item = movie.textContent;
                if (item.toLowerCase().indexOf(term) != -1) {
                    movie.parentElement.parentElement.parentElement.style.display = "block"
                } else {
                    movie.parentElement.parentElement.parentElement.style.display = "none";
                }

            })
})
