const movies = [
  {
    title: "Interstellar",
    year: "2014",
    image: "https://images.unsplash.com/photo-1489599849927-2ee91cede3ba?q=80&w=1200&auto=format&fit=crop"
  },

  {
    title: "Inception",
    year: "2010",
    image: "https://images.unsplash.com/photo-1517604931442-7e0c8ed2963c?q=80&w=1200&auto=format&fit=crop"
  },

  {
    title: "Avatar",
    year: "2009",
    image: "https://images.unsplash.com/photo-1478720568477-152d9b164e26?q=80&w=1200&auto=format&fit=crop"
  },

  {
    title: "The Batman",
    year: "2022",
    image: "https://images.unsplash.com/photo-1440404653325-ab127d49abc1?q=80&w=1200&auto=format&fit=crop"
  }
];

const movieGrid = document.getElementById("movieGrid");
const search = document.getElementById("search");

function displayMovies(movieList){

  movieGrid.innerHTML = "";

  movieList.forEach(movie => {

    movieGrid.innerHTML += `
    
      <div class="movie-card">

        <img src="${movie.image}" alt="${movie.title}">

        <div class="movie-info">

          <h3>${movie.title}</h3>

          <p>Year: ${movie.year}</p>

          <button onclick="watchMovie('${movie.title}')">
            Watch Movie
          </button>

        </div>

      </div>
    `;
  });
}

function watchMovie(title){
  alert("Now Playing: " + title);
}

search.addEventListener("input", () => {

  const value = search.value.toLowerCase();

  const filteredMovies = movies.filter(movie =>
    movie.title.toLowerCase().includes(value)
  );

  displayMovies(filteredMovies);
});

displayMovies(movies);