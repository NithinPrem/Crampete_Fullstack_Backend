const express = require("express");
const router = express.Router();
const axios = require("axios");

// API Calls for Random News for Random News for the Dashboard Rerouted from the frontend to the backend.

router.get("/newsRandom", async (req, res) => {
	const newsResponse = await axios.get(
		`https://newsapi.org/v2/top-headlines?country=us&apiKey=${process.env.NEWS_API_KEY}&pageSize=9`
	);

	const dataForNews = newsResponse.data.articles;
	res.json(dataForNews);
});

module.exports = router;
