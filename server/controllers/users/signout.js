const { userinfo } = require("../../models");

module.exports = async (req, res) => {
  const { username } = req.body;

  if (!username) {
    return res
      .status(404)
      .send("로그인 정보가 만료되었거나 로그인 중이 아닙니다.");
  }

  userinfo
    .destroy({
      where: {
        username: username,
      },
    })
    .then(() => {
      res.status(200).json({ message: "signout ok" });
    });
};
