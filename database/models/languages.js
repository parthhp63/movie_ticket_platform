'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class languages extends Model {
    static associate(models) {
        languages.hasMany(models.movie_languages,{foreignKey:'language_id'})
    }
  }
  languages.init({
    name: DataTypes.STRING

  }, {
    sequelize,
    modelName: 'languages',
  });
  return languages;
};