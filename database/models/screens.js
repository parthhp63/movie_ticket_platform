'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class screens extends Model {
    static associate(models) {
        screens.belongsto(models.theaters,{foreignKey:'theater_id'})
        screens.hasMany(models.seats,{foreignKey:'screen_id'})
        screens.hasMany(models.shows,{foreignKey:'screen_id'})

    }
  }
  screens.init({
    theater_id:DataTypes.INTEGER,
    name:DataTypes.STRING,
  }, {
    sequelize,
    modelName: 'screens',
  });
  return screens;
};