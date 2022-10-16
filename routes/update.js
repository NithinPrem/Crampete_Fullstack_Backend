const express = require("express");
const router = express.Router();
const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");
const user = require("../database");

router.post("/updatePassword", async (req, res) => {
	const body = req.body;
	const clientToken = body.token;

	try {
		const VerifiedToken = jwt.verify(
			clientToken,
			"process.env.JWT_SECRET_KEY"
		);

		if (VerifiedToken) {
			const hashedPassword = await bcrypt.hash(
				body.updatedPassword,
				7
			);
			await user.findOneAndUpdate(
				{
					email: VerifiedToken,
				},
				{ password: hashedPassword }
			);
			res.status(200).json({
				msg: "Password Updated Successfully!!!",
				status: true,
			});
		} else {
			res
				.status(404)
				.json({ msg: "Network Error", status: false });
		}
	} catch (err) {
		res.status(401).json(err, {
			msg: "Bad Authorization",
			status: false,
		});
	}
});

module.exports = router;
