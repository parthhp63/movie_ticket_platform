'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class bookings extends Model {
    static associate(models) {
        bookings.belongsTo(models.users,{foreignKey:'user_id'})
        bookings.belongsTo(models.shows,{foreignKey:'show_id'})
    }
  }
  bookings.init({
      user_id:DataTypes.INTEGER,
      show_id:DataTypes.INTEGER,
      booking_time:DataTypes.DATE,
      tickets_no:DataTypes.INTEGER,
      status:DataTypes.STRING
  }, {
    sequelize,
    modelName: 'bookings',
  });
  return bookings;
};