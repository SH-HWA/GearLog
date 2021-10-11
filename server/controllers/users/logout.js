const { sendAccessToken } = require("../tokenFunctions");

module.exports = (req, res) => {
  // console.log(req.headers);

  res.clearCookie("accessToken");
  res.status(200).json({ message: "현재 로그인 중이 아닙니다." });
};
