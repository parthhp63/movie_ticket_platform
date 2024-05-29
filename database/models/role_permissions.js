'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class role_permissions extends Model {
    static associate(models) {
        role_permissions.belongsTo(models.roles,{foreignKey:'role_id'}),
        role_permissions.belongsTo(models.permissions,{foreignKey:'permission_id'})
    }
  }
  role_permissions.init({
    role_id:DataTypes.INTEGER,
    permission_id:DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'role_permissions',
  });
  return role_permissions;
};
