'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class ratings extends Model {
    static associate(models) {
        ratings.belongsTo(models.users,{foreignKey:'user_id'})
        ratings.belongsTo(models.movies,{foreignKey:'movie_id'})

    }
  }
  ratings.init({
    user_id:DataTypes.INTEGER,
    movie_id:DataTypes.INTEGER,
    rating:DataTypes.STRING,
    review:DataTypes.STRING
  }, {
    sequelize,
    modelName: 'ratings',
  });
  return ratings;
};