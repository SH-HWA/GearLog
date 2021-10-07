'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class userinfo extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      models.userinfo.belongsTo(models.post, {foreignKey: 'writerId'})
      models.userinfo.belongsTo(models.comment, {foreignKey: 'commenterId'})
    }
  };
  userinfo.init({
    username: DataTypes.STRING,
    email: DataTypes.STRING,
    password: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'userinfo',
  });
  return userinfo;
};