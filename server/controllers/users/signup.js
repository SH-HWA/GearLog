const { userinfo } = require('../../models');
const { generateAccessToken } = require('../tokenFunctions');

module.exports = (req, res) => {
  const { username, email, password } = req.body;

  // if (!email || !password || !username) {
  //   return res.status(422).send('모든 정보는 필수 입력 사항입니다.')
  // }

  userinfo.findOne({
    where: {
      email
    }
  }).then((data) => {
    if (data) {
      return res.status(409).json({ message: "invalid user" })
    } else {
      userinfo.create(req.body)
      const accessToken = generateAccessToken(req.body);

      res.cookie("accessToken", accessToken, {
        httpOnly: true,
        expiresIn: '180m',
        sameSite: "Strict",
        secure: true,
      }).status(201).json({ message: 'signup ok' })
    }
  })


}