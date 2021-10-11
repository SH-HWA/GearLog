const { userinfo } = require("../../models");
const { generateAccessToken } = require("../tokenFunctions");
const crypto = require("crypto");

module.exports = (req, res) => {
  const { username, email, password } = req.body;
  const hashPassword = crypto
    .createHash("sha512")
    .update(password)
    .digest("hex");

  if (!email || !password || !username) {
    return res.status(422).send("모든 정보는 필수 입력 사항입니다.");
  }

  userinfo
    .findOne({
      where: {
        username,
      },
    })
    .then((data) => {
      if (data) {
        return res
          .status(202)
          .json({ message: "이미 존재하는 username입니다" });
      } else {
        userinfo
          .findOne({
            where: {
              email,
            },
          })
          .then((data) => {
            if (data) {
              return res
                .status(202)
                .json({ message: "이미 존재하는 email입니다" });
            } else {
              userinfo.create({
                username: username,
                email: email,
                password: hashPassword,
              });
              const accessToken = generateAccessToken(req.body);

              res
                .cookie("accessToken", accessToken, {
                  httpOnly: true,
                  expiresIn: "180m",
                  sameSite: "Strict",
                  secure: true,
                })
                .status(201)
                .json({ message: "signup ok", token: `${accessToken}` });
            }
          });
      }
    });
};
