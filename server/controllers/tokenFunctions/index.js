require("dotenv").config();
const jwt = require("jsonwebtoken");

module.exports = {
  generateAccessToken: (data) => {
    return jwt.sign(data, process.env.ACCESS_SECRET);
  },
  sendAccessToken: (res, accessToken) => {
    res
      .cookie("accessToken", accessToken, {
        httpOnly: true,
        expiresIn: "180m",
        sameSite: "Strict",
      })
      .status(200)
      .json({ message: "ok", token: `${accessToken}` });
  },
  isAuthorized: (req) => {
    const auth = req.headers["authorization"];

    if (!auth) {
      return null;
    }

    const token = auth.split(" ")[1];

    try {
      return jwt.verify(token, process.env.ACCESS_SECRET);
    } catch (err) {
      return null;
    }
  },
};
