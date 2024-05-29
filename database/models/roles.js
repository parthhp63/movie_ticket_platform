'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class roles extends Model {
    static associate(models) {
        roles.hasMany(models.role_permissions,{foreignKey:'role_id'})
        roles.hasMany(models.users,{foreignKey:'role_id'})

    }
  }
  roles.init({
    name:DataTypes.STRING,
    description:DataTypes.STRING
  }, {
    sequelize,
    modelName: 'roles',
  });
  return roles;
};