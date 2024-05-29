'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.createTable('theaters',{
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      name:{
        type:Sequelize.STRING
      },
      location: {
        type: Sequelize.STRING
      },
      city_id: {
        type: Sequelize.INTEGER
      },
      cancellation: {
        type: Sequelize.INTEGER
      },
      parking_facility: {
        type: Sequelize.INTEGER
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

    queryInterface.addConstraint('theaters',{
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

  async down (queryInterface, Sequelize) {
      await queryInterface.dropTable('theaters');
  }
};
