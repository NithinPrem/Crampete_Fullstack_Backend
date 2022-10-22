const express = require("express");
const router = express.Router();
const axios = require("axios");

// API Calls for TMDB MOVIES for Top Rated Movies for the Dashboard, Rerouted from the frontend to the backend.

router.post("/moviesRandom", async (req, res) => {
	const randomMovieResponse = await axios.get(
		`https://api.themoviedb.org/3/movie/top_rated?api_key=${process.env.TMDB_API_KEY}&language=en-US&page=1`
	);

	const dataForRandomMovies =
		randomMovieResponse.data.results;

	res.json(dataForRandomMovies);
});

module.exports = router;
