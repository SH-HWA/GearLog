require("dotenv").config();

const clientId = process.env.KAKAO_CLIENT_ID;
const clientSecret = process.env.KAKAO_CLIENT_SECRET;
const axios = require("axios");
const qs = require("qs");

module.exports = (req, res) => {
  axios({
    method: "POST",
    url: "https://kauth.kakao.com/oauth/token",
    headers: {
      "content-type": "application/x-www-form-urlencoded",
    },
    data: qs.stringify({
      grant_type: "authorization_code",
      client_id: clientId,
      // client_secret: clientSecret,
      redirectUri: "http://localhost:3000",
      code: req.body.authorizationCode,
    }),
  }).then((response) => {
    const token = response.data.access_token;
    // console.log(token);
    axios({
      method: "GET",
      url: "https://kapi.kakao.com/v2/user/me",
      headers: {
        Authorization: `Bearer ${token}`,
      },
    })
      .then((result) => {
        // console.log("HERE", result);
        res.status(200).json({ data: result.data });
      })
      .catch((err) => {
        res.status(404);
      });
  });
};
