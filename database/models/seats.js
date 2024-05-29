'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class seats extends Model {
    static associate(models) {
        seats.belongsTo(models.screens,{foreignKey:'screen_id'})
    }
  }
  seats.init({
    screen_id:DataTypes.INTEGER,
    seat_no:DataTypes.STRING
  }, {
    sequelize,
    modelName: 'seats',
  });
  return seats;
};