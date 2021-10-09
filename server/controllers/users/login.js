const { userinfo } = require("../../models");
const { generateAccessToken, sendAccessToken } = require("../tokenFunctions");

module.exports = async (req, res) => {
  console.log(req.body);
  const { email, password } = req.body;
  let data = await userinfo.findOne({
    where: {
      email: email,
      password: password,
    },
  });
  if (!data) {
    return res.status(404).send({ message: "invalid user" });
  }

  const accessToken = generateAccessToken(data.dataValues);

  sendAccessToken(res, accessToken);
};
