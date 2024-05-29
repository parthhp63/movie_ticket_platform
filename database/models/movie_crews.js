'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class movie_crews extends Model {
    static associate(models) {
        movie_crews.belongsTo(models.movies,{foreignKey:'movie_id'})
        movie_crews.belongsTo(models.crews,{foreignKey:'crew_id'})
    }
  }
  movie_crews.init({
    movie_id:DataTypes.INTEGER,
    crew_id:DataTypes.INTEGER,
  }, {
    sequelize,
    modelName: 'movie_crews',
  });
  return movie_crews;
};