const express = require("express");
const router = express.Router();
const axios = require("axios");

// Searching API Calls for TMDB MOVIES, Rerouted from the frontend to the backend.

router.get("/movieSearch", async (req, res) => {
	const body = req.query;
	const movieSearchData = await axios.get(
		`https://api.themoviedb.org/3/search/movie?api_key=${process.env.TMDB_API_KEY}&language=en-US&query=${body.search}&page=1&include_adult=false`
	);
	const searchDataForMovies = movieSearchData.data.results;
	res.json(searchDataForMovies);
});

module.exports = router;
