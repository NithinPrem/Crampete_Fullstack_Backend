const express = require("express");
const router = express.Router();
const bcrypt = require("bcrypt");
const user = require("../database");

router.post("/signup", async (req, res) => {
	const body = req.body;

	const userDetails = await user.findOne({
		email: body.email,
	});

	if (!userDetails) {
		try {
			const hashedPassword = await bcrypt.hash(
				body.password,
				7
			);
			const newUser = await new user({
				firstName: body.firstName,
				lastName: body.lastName,
				userName: body.userName,
				email: body.email,
				password: hashedPassword,
			}).save();

			res.status(200).json({
				msg: "Congratulations, you're Account has been Successfully Created🎉🎊🥳🎊🎉",
			});
		} catch (err) {
			res.status(401).json({
				Error: err,
				msg: "Network Error, Please try again later!",
			});
		}
	} else {
		res.status(400).json({
			msg: "User Already exists / Unable to Create Your Account!",
		});
	}
});

module.exports = router;
