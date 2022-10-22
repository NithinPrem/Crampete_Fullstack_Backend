const express = require("express");
const router = express.Router();
const axios = require("axios");

// API Calls for Quotable for Quotes Rerouted from the frontend to the backend.

router.get("/quotes", async (req, res) => {
	const quotesResponse = await axios.get(
		`https://api.quotable.io/random`
	);
	const dataForQuotes = quotesResponse.data.content;
	res.json(dataForQuotes);
});

module.exports = router;
