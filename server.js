const express = require("express");
const app = express();

require("dotenv").config();
require("./database");

const bodyParser = require("body-parser");
app.use(bodyParser.json());

const helmet = require("helmet");
app.use(helmet());

const cors = require("cors");
app.use(
	cors({
		origin: "https://randomnp.vercel.app",
		methods: ["GET", "POST"],
	})
);

const login = require("./routes/login");
const signUp = require("./routes/signUp");
const deleted = require("./routes/delete");
const update = require("./routes/update");
const quotes = require("./routes/quotes");
const newsRandom = require("./routes/newsRandom");
const moviesRandom = require("./routes/moviesRandom");
const youtubeSearch = require("./routes/youtubeSearch");
const movieSearch = require("./routes/movieSearch");
const newsSearch = require("./routes/newsSearch");

const port = process.env.PORT || 8000;

app.use("/api", login);
app.use("/api", signUp);
app.use("/api", deleted);
app.use("/api", update);
app.use("/api", quotes);
app.use("/api", newsRandom);
app.use("/api", moviesRandom);
app.use("/api", youtubeSearch);
app.use("/api", movieSearch);
app.use("/api", newsSearch);

app.listen(port, () => {
	console.log(
		`Server Started on PORT : ${process.env.PORT}`
	);
});
