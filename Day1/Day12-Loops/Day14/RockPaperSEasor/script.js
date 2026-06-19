const API_KEY = "YOUR_OMDB_API_KEY";

const buttons = document.querySelectorAll(".mood-buttons button");
const moviesContainer = document.getElementById("movies-container");

const moodKeywords = {
    comedy: "comedy",
    happy: "family",
    sad: "drama",
    excited: "action",
    romantic: "romance"
};

buttons.forEach(btn => {
    btn.addEventListener("click", () => {
        const mood = btn.dataset.mood;
        fetchMovies(moodKeywords[mood]);
    });
});

async function fetchMovies(keyword) {

    moviesContainer.innerHTML = "<h2>Loading Movies...</h2>";

    try {

        const response = await fetch(
            `https://www.omdbapi.com/?apikey=${API_KEY}&s=${keyword}`
        );

        const data = await response.json();

        if (data.Response === "False") {
            moviesContainer.innerHTML =
                "<h2>No movies found.</h2>";
            return;
        }

        displayMovies(data.Search);

    } catch (error) {
        moviesContainer.innerHTML =
            "<h2>Error loading movies.</h2>";

        console.error(error);
    }
}

function displayMovies(movies) {

    moviesContainer.innerHTML = "";

    movies.forEach(movie => {

        const card = document.createElement("div");

        card.classList.add("movie-card");

        card.innerHTML = `
            <img src="${
                movie.Poster !== "N/A"
                    ? movie.Poster
                    : "https://via.placeholder.com/200x300"
            }" alt="${movie.Title}">

            <h3>${movie.Title}</h3>
            <p>${movie.Year}</p>
        `;

        moviesContainer.appendChild(card);
    });
}