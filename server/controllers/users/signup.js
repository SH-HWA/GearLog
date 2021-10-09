const { userinfo } = require("../../models");
const { generateAccessToken } = require("../tokenFunctions");

module.exports = (req, res) => {
  const { username, email, password } = req.body;

  if (!email || !password || !username) {
    return res.status(422).send('모든 정보는 필수 입력 사항입니다.')
  }

  userinfo
    .findOne({
      where: {
        username,
      }
    }).then((data) => {
      if (data) {
        return res.status(202).json({ message: "이미 존재하는 username입니다" });
      } else {
        userinfo.findOne({
          where: {
            email,
          },
        })
        .then((data) => {
          if (data) {
            return res.status(202).json({ message: "이미 존재하는 email입니다" });
          } else {
            userinfo.create(req.body);
            const accessToken = generateAccessToken(req.body);
    
            res
              .cookie("accessToken", accessToken, {
                httpOnly: true,
                expiresIn: "180m",
                sameSite: "Strict",
                secure: true,
              })
              .status(201)
              .json({ message: "signup ok" });
          }
        });
      }
    })
};
