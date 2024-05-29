'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class movies extends Model {
    static associate(models) {
        movies.hasMany(models.movie_languages,{foreignKey:'movies_id'})
        movies.hasMany(models.movie_crews,{foreignKey:'movie_id'})
        movies.hasMany(models.ratings,{foreignKey:'movie_id'})
        movies.hasMany(models.shows,{foreignKey:'movie_id'})

    }
  }
  movies.init({
    title: DataTypes.STRING,
    description:DataTypes.STRING,
    genre:DataTypes.STRING,
    release_date:DataTypes.DATEONLY,
    duration:DataTypes.FLOAt,
    trailer:DataTypes.STRING

  }, {
    sequelize,
    modelName: 'movies',
  });
  return movies;
};