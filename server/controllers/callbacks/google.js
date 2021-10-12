require("dotenv").config();

const clientId = process.env.GOOGLE_CLIENT_ID;
const clientSecret = process.env.GOOGLE_CLIENT_SECRET;
const axios = require("axios");

module.exports = (req, res) => {
  axios({
    method: "POST",
    url: `https://accounts.google.com/o/oauth2/token?grant_type=authorization_code&client_id=${clientId}&client_secret=${clientSecret}&redirect_uri=http://localhost:3000&code=${req.body.authorizationCode}`,
  })
    .then((response) => {
      // console.log(response);
      const token = response.data.access_token;

      axios({
        method: "GET",
        url: `https://www.googleapis.com/userinfo/v2/me?access_token=${token}`,
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }).then((result) => {
        res.status(200).json({ data: result.data });
      });
    })
    .catch((err) => {
      res.status(404);
    });
};
