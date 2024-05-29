'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class users extends Model {
    static associate(models) {
      users.belongsTo(models.states,{foreignKey:'state_code'})
      users.belongsTo(models.cities,{foreignKey:'city_id'})
      users.belongsTo(models.roles,{foreignKey:'role_id'})
      users.hasMany(models.ratings,{foreignKey:'user_id'})
      users,this.hasMany(models.bookings,{foreignKey:'user_id'})

      
    }
  }
  users.init({
    fname: DataTypes.STRING,
    lname:DataTypes.STRING,
    username:DataTypes.STRING,
    email:DataTypes.STRING,
    phone_no:DataTypes.STRING,
    gender:DataTypes.STRING,
    address:DataTypes.STRING,
    state_code:DataTypes.STRING,
    city_id:DataTypes.INTEGER,
    zipcode:DataTypes.INTEGER,
    salt:DataTypes.STRING,
    password:DataTypes.STRING,
    role_id:DataTypes.INTEGER,
    activation_code:DataTypes.STRING,
    delete_at:{        
      type: 'TIMESTAMP',
     defaultValue: new Date()},
  }, {
    sequelize,
    modelName: 'users',
  });
  return users;
};