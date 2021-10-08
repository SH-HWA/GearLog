const { sendAccessToken } = require("../tokenFunctions");

module.exports = (req, res) => {
    if (!req.headers["authorization"]) {
      return res.status(500).send('현재 로그인 중이 아닙니다.')
    }
    const emptyToken = '';
    sendAccessToken(res, emptyToken);
  };
  