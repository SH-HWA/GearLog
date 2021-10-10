const { userinfo } = require("../../models");

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
            res.status(200).json({
              message: `username이 ${newname}(으)로 변경되었습니다.`,
            });
          });
      }
    });
};
