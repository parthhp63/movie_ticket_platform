'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class theaters extends Model {
    static associate(models) {
        theaters.belongsTo(models.cities,{foreignKey:'city_id'})
        theaters.hasMany(models.screens,{foreignKey:'theater_id'})

    }
  }
  theaters.init({
    name: DataTypes.STRING,
    location:DataTypes.STRING,
    city_id:DataTypes.INTEGER,
    cancellation:DataTypes.STRING,
    parking_facility:DataTypes.STRING
  }, {
    sequelize,
    modelName: 'theaters',
  });
  return theaters;
};