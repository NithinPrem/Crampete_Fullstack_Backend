const express = require("express");
const app = express();
const axios = require("axios").default;
require("dotenv").config();
require("./database");
const bodyParser = require("body-parser");
app.use(bodyParser.json());
const cors = require("cors");
app.use(
	cors({
		origin: "https://randomnp.vercel.app",
	})
);

// app.use((req, res, next) => {
// 	res.header(
// 		"Access-Control-Allow-Origin",
// 		"https://randomnp.vercel.app"
// 	);
// 	next();
// });

const signIn = require("../backend/routes/signIn");
const signUp = require("../backend/routes/signUp");
const deleted = require("../backend/routes/delete");
const update = require("../backend/routes/update");
const path = require("path");

const port = process.env.PORT || 8000;

app.use("/api", signIn);
app.use("/api", signUp);
app.use("/api", deleted);
app.use("/api", update);

// API Calls for Quotable, NewsAPI, TMDB MOVIES & YouTube Respectively for News Rerouted from the frontend to the backend.

app.get("/api/quotes", async (req, res) => {
	const quotesResponse = await axios.get(
		`https://api.quotable.io/random`
	);
	const dataForQuotes = quotesResponse.data.content;
	res.json(dataForQuotes);
});

app.get("/api/newsRandom", async (req, res) => {
	const newsResponse = await axios.get(
		`https://newsapi.org/v2/top-headlines?country=us&apiKey=${process.env.NEWS_API_KEY}&pageSize=9`
	);

	const dataForNews = newsResponse.data.articles;
	res.json(dataForNews);
});

app.post("/api/movieRandom", async (req, res) => {
	const randomMovieResponse = await axios.get(
		`https://api.themoviedb.org/3/movie/top_rated?api_key=${process.env.TMDB_API_KEY}&language=en-US&page=1`
	);

	const dataForRandomMovies =
		randomMovieResponse.data.results;

	res.json(dataForRandomMovies);
});

app.get("/api/youtubeRandom", async (req, res) => {
	const randomYoutubeResponse = await axios.get(
		`https://youtube.googleapis.com/youtube/v3/videos?part=snippet&chart=mostPopular&regionCode=us&key=${process.env.YOUTUBE_API_KEY}&maxResults=9`
	);
	const randomDataForYouTube =
		randomYoutubeResponse.data.items;
	res.json(randomDataForYouTube);
});

// Searching API Calls for NewsAPI, TMDB MOVIES & YouTube Respectively for News Rerouted from the frontend to the backend.

app.get("/api/newsSearch", async (req, res) => {
	const body = req.query;
	const newsSearchData = await axios.get(
		`https://newsapi.org/v2/everything?q=${body.search}&apiKey=${process.env.NEWS_API_KEY}`
	);

	const searchDataForNews = newsSearchData.data.articles;
	res.json(searchDataForNews);
});

app.get("/api/movieSearch", async (req, res) => {
	const body = req.query;
	const movieSearchData = await axios.get(
		`https://api.themoviedb.org/3/search/movie?api_key=${process.env.TMDB_API_KEY}&language=en-US&query=${body.search}&page=1&include_adult=false`
	);
	const searchDataForMovies = movieSearchData.data.results;
	res.json(searchDataForMovies);
});

app.get("/api/youtubeSearch", async (req, res) => {
	const body = req.query;
	const youtubeData = await axios.get(
		`https://www.googleapis.com/youtube/v3/search?part=snippet&q=${body.search}&key=${process.env.YOUTUBE_API_KEY}&maxResults=50`
	);
	const searchDataForYouTube = youtubeData.data;
	res.json(searchDataForYouTube);
});

app.listen(port, () => {
	console.log(`Server Started on ${process.env.PORT}`);
});
