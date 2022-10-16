const express = require("express");
const router = express.Router();
const user = require("../database");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

router.post("/login", async (req, res) => {
	const body = req.body;

	const userDetails = await user.findOne({
		email: body.email,
	});

	if (userDetails) {
		const dbPassword = await bcrypt.compare(
			body.password,
			userDetails.password
		);

		if (dbPassword) {
			const jwtToken = jwt.sign(
				body.email,
				"process.env.JWT_SECRET_KEY"
			);

			res.status(200).json({
				msg: "Logged In Successfully",
				user: {
					firstName: userDetails.firstName,
					lastName: userDetails.lastName,
					userName: userDetails.userName,
					email: userDetails.email,
					status: true,
					token: jwtToken,
				},
			});
		} else {
			res.status(404).json({
				msg: "Invalid Password",
				status: false,
			});
		}
	} else {
		res.status(404).json({
			msg: "Invalid Email Address or Password",
			status: false,
		});
	}
});

module.exports = router;
