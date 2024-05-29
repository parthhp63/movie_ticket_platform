'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class movie_languages extends Model {
    static associate(models) {
        movie_languages.belongsTo(models.movies,{foreignKey:'movie_id'})
        movie_languages.belongsTo(models.languages,{foreignKey:'language_id'})

    }
  }
  movie_languages.init({
    movie_id: DataTypes.INTEGER,
    language_id: DataTypes.INTEGER,
  }, {
    sequelize,
    modelName: 'movie_languages',
  });
  return movie_languages;
};