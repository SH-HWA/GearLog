const { userinfo } = require("../../models");
const { generateAccessToken, sendAccessToken } = require("../tokenFunctions");

module.exports = async (req, res) => {
  // console.log(req.body);
  const { email, password } = req.body;
  let data = await userinfo.findOne({
    where: {
      email: email,
      password: password,
    },
  });
  if (!data) {
    return res
      .status(404)
      .json({ message: "비밀번호가 잘못되었거나 없는 이메일 입니다." });
  }

  const accessToken = generateAccessToken(data.dataValues);

  sendAccessToken(res, accessToken);
};
