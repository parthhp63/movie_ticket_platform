'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class permissions extends Model {
    static associate(models) {
        permissions.hasMany(models.role_permissions,{foreignKey:'permission_id'})
    }
  }
  permissions.init({
    name:DataTypes.STRING,
  }, {
    sequelize,
    modelName: 'permissions',
  });
  return permissions;
};