const mongoose = require("mongoose");

mongoose
	.connect(process.env.MONGO_DB_CONNECTION_KEY)
	.then((res) => {
		console.log("DB Connected");
	})
	.catch((err) => {
		console.log(err, "Error connecting");
	});

const userSchema = mongoose.Schema({
	firstName: String,
	lastName: String,
	email: String,
	password: String,
});

const user = mongoose.model("userRecord", userSchema);

module.exports = user;
