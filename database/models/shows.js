'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class shows extends Model {
    static associate(models) {
        shows.belongsTo(models.screens,{foreignKey:'screen_id'})
        shows.belongsTo(models.movies,{foreignKey:'movie_id'})
        shows.hasMany(models.bookings,{foreignKey:'show_id'})

    }
  }
  shows.init({
    movie_id:DataTypes.INTEGER,
    screen_id:DataTypes.INTEGER,
    start_time:DataTypes.STRING,
    end_time:DataTypes.STRING,
    date:DataTypes.DATEONLY
  }, {
    sequelize,
    modelName: 'shows',
  });
  return shows;
};