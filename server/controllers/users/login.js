const { userinfo } = require('../../models');
const { generateAccessToken, sendAccessToken } = require('../tokenFunctions');

module.exports = async (req, res) => {
  const { email, password } = req.body;
  let data = await userinfo.findOne({
    where: {
      email: email,
      password: password,
    }
  })
  if (!data) {
    return res.status(404).send('invalid user')
  }
    
  const accessToken = generateAccessToken(data.dataValues);

  sendAccessToken(res, accessToken);
};
