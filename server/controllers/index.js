module.exports = {
  userinfo: require("./users/userinfo"),
  signup: require("./users/signup"),
  login: require("./users/login"),
  logout: require("./users/logout"),
  kakaoCB: require("./callbacks/kakao"),
  naverCB: require("./callbacks/naver"),
  googleCB: require("./callbacks/google"),
  update: require("./users/update"),
  signout: require("./users/signout"),
};
