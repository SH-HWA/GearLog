const { isAuthorized } = require('../tokenFunctions');

module.exports = (req, res) => {
  const accessTokenData = isAuthorized(req);

  if (accessTokenData === null) {
    return res.status(401).send('토큰이 없거나 유효하지 않습니다.');
  }

  if (accessTokenData !== null) {
    return res.status(200).json({ data: { userinfo: {
      email: accessTokenData.email,
      username: accessTokenData.username,
    }}})
  }
};
