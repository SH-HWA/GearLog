const { userinfo } = require("../../models");
const { generateAccessToken } = require("../tokenFunctions");

module.exports = (req, res) => {
  const { newname } = req.body;

  userinfo
    .findOne({
      where: {
        username: newname,
      },
    })
    .then((data) => {
      if (data) {
        return res
          .status(202)
          .json({ message: "이미 존재하는 username입니다" });
      } else {
        userinfo
          .update(
            { username: req.body.newname },
            {
              where: {
                username: req.body.username,
              },
            }
          )
          .then(() => {
            userinfo
              .findOne({
                where: {
                  username: req.body.newname,
                },
              })
              .then((data) => {
                console.log(data);
                const newToken = generateAccessToken(data.dataValues);
                res.clearCookie("accessToken");
                res
                  .cookie("accessToken", newToken, {
                    httpOnly: true,
                    expiresIn: "180m",
                    sameSite: "Strict",
                  })
                  .status(200)
                  .json({
                    message: `username이 ${newname}(으)로 변경되었습니다.`,
                  });
              });
          });
      }
    });
};
