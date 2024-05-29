'use strict';
const { DataTypes } = require('sequelize');

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('users', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      fname: {
        type: Sequelize.STRING
      },
      lname: {
        type: Sequelize.STRING
      },
      username: {
        type: Sequelize.STRING
      },
      email: {
        type: Sequelize.STRING
      },
      phone_no: {
        type: Sequelize.STRING
      },
      gender: {
        type: Sequelize.STRING
      },
      address: {
        type: Sequelize.STRING
      },
      state_code:{
        type:DataTypes.STRING
      },
      city_id:{
        type:DataTypes.INTEGER
      },
      zipcode: {
        type: Sequelize.INTEGER
      },
      salt: {
        type: Sequelize.STRING
      },
      password: {
        type: Sequelize.STRING
      },
      role_id:{
        type:DataTypes.INTEGER
      },
      activation_code: {
        type: Sequelize.STRING
      },
      deleted_at:{
        type:Sequelize.DATE
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });

    queryInterface.addConstraint('users',{
      fields:['role_id'],
      type:'foreign key',
      references:{
        table:'roles',
        field:'id',
      },
      onDelete:'cascade',
      onUpdate:'cascade'
    });

    queryInterface.addConstraint('users',{
      fields:['state_code'],
      type:'foreign key',
      references:{
        table:'states',
        field:'iso_code',
      },
      onDelete:'cascade',
      onUpdate:'cascade'
    });

    queryInterface.addConstraint('users',{
      fields:['city_id'],
      type:'foreign key',
      references:{
        table:'cities',
        field:'id',
      },
      onDelete:'cascade',
      onUpdate:'cascade'
    });


  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('users');
  }
};