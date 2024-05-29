'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class cities extends Model {
    static associate(models) {
        cities.belongsTo(models.states,{foreignKey:'state_code'})
        cities.hasmany(models.users,{foreignKey:'city_id'})
        cities.hasmany(models.theaters,{foreignKey:'city_id'})

    }
  }
  cities.init({
    name:DataTypes.STRING,
    state_code:DataTypes.STRING
  }, {
    sequelize,
    modelName: 'cities',
  });
  return cities;
};