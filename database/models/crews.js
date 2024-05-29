'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class crews extends Model {
    static associate(models) {
     crews.hasMany(models.movie_crews,{foreignKey:'crew_id'})
    }
  }
  crews.init({
    name:DataTypes.STRING,
    photo:DataTypes.STRING,
    ocupation:DataTypes.STRING,
    dob:DataTypes.DATEONLY,
    birth_place:DataTypes.STRING,
    info:DataTypes.STRING
  }, {
    sequelize,
    modelName: 'crews',
  });
  return crews;
};