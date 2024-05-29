'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.createTable('crews',{
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      name: {
        type: Sequelize.STRING
      },
      photo:{
        type:Sequelize.STRING
      },
      occupation:{
        type:Sequelize.STRING
      },
      dob:{
        type:Sequelize.DATEONLY
      },
      birth_place:{
        type:Sequelize.STRING
      },
      info:{
        type:Sequelize.STRING
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
  },

  async down (queryInterface, Sequelize) {

    await queryInterface.dropTable('crews');

  }
};
