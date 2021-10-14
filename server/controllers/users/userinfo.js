const { isAuthorized } = require("../tokenFunctions");

module.exports = (req, res) => {
  // console.log(req);
  const accessTokenData = isAuthorized(req);

  if (accessTokenData === null) {
    return res
      .status(401)
      .json({ message: "토큰이 없거나 유효하지 않습니다." });
  }

  if (accessTokenData !== null) {
    return res.status(200).json({
      data: {
        userinfo: {
          email: accessTokenData.email,
          username: accessTokenData.username,
          createdAt: accessTokenData.createdAt,
        },
      },
    });
  }
};
