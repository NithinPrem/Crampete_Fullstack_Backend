const express = require("express");
const router = express.Router();
const axios = require("axios");

// Searching API Calls for NEWS, Rerouted from the frontend to the backend.

router.get("/newsSearch", async (req, res) => {
	const body = req.query;
	const newsSearchData = await axios.get(
		`https://newsapi.org/v2/everything?q=${body.search}&apiKey=${process.env.NEWS_API_KEY}`
	);

	const searchDataForNews = newsSearchData.data.articles;
	res.json(searchDataForNews);
});

module.exports = router;
