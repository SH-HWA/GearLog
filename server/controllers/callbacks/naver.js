require("dotenv").config();

const clientId = process.env.NAVER_CLIENT_ID;
const clientSecret = process.env.NAVER_CLIENT_SECRET;
const axios = require("axios");

module.exports = (req, res) => {
  axios({
    method: "POST",
    url: `https://nid.naver.com/oauth2.0/token?grant_type=authorization_code&client_id=${clientId}&client_secret=${clientSecret}&redirect_uri=http://localhost:3000&code=${req.body.authorizationCode}&state=RAMDOM_STATE`,
    headers: {
      "X-Naver-Client-Id": clientId,
      "X-Naver-Client-Secret": clientSecret,
    },
  })
    .then((response) => {
      // console.log(response);
      const token = response.data.access_token;

      axios({
        method: "GET",
        url: "https://openapi.naver.com/v1/nid/me",
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
        .then((result) => {
          // console.log("HERE", result);
          res.status(200).json({ data: result.data.response });
        })
        .catch((err) => {
          console.log(err);
        });
    })
    .catch((err) => {
      res.status(404);
    });
};
