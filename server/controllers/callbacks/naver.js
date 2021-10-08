require('dotenv').config();

const clientId = process.env.NAVER_CLIENT_ID;
const clientSecret = process.env.NAVER_CLIENT_SECRET;
const axios = require('axios');

module.exports = (req, res) => {
  axios({
    method: 'post',
    url: 'https://nid.naver.com/oauth2.0/authorize',
    headers: {
      accept: 'application/json'
    },
    data: {
      client_id: clientId,
      client_secret: clientSecret,
      code: req.body.authorizationCode
    }
  }).then((response) => {
      res.status(200).json({ accessToken: response.access_token })
  }).catch(err => {
      res.status(404)
  })
}