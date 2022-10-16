const express = require("express");
const router = express.Router();
const jwt = require("jsonwebtoken");
const user = require("../database");

router.post("/deleteUser", async (req, res) => {
	const body = req.body;
	const clientToken = body.token;

	try {
		const VerifiedToken = jwt.verify(
			clientToken,
			"process.env.JWT_SECRET_KEY"
		);

		const userToBeDeleted = await user.findOneAndDelete({
			email: VerifiedToken,
		});

		if (userToBeDeleted) {
			res.status(200).json({
				msg: "User / Account Deleted Successfully.",
				status: true,
			});
		} else {
			res
				.status(404)
				.json({ msg: "Network Error!!!!", status: false });
		}
	} catch (e) {
		res.status(401).json({
			msg: "Bad Authorization",
			status: false,
		});
	}
});

module.exports = router;
