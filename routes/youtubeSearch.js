const express = require("express");
const router = express.Router();
const axios = require("axios");

// Searching API Calls for YouTube, Rerouted from the frontend to the backend.

router.get("/youtubeSearch", async (req, res) => {
	const body = req.query;
	const youtubeData = await axios.get(
		`https://www.googleapis.com/youtube/v3/search?part=snippet&q=${body.search}&key=${process.env.YOUTUBE_API_KEY}&maxResults=50`
	);
	const searchDataForYouTube = youtubeData.data;
	res.json(searchDataForYouTube);
});

module.exports = router;
