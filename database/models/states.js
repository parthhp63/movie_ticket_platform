'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class states extends Model {
    static associate(models) {
        states.hasMany(models.users,{foreignKey:'state_code'}),
        states.hasMany(models.cities,{foreignKey:'state_code'})
    }
  }
  states.init({
    name: DataTypes.STRING,
    iso_code:{        
      type: DataTypes.STRING,
     unique:true},
  }, {
    sequelize,
    modelName: 'states',
  });
  return states;
};