'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.createTable('seats',{
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      screen_id: {
        type: Sequelize.INTEGER
      },
      seat_no: {
        type: Sequelize.STRING
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

    queryInterface.addConstraint('seats',{
      fields:['screen_id'],
      type:'foreign key',
      references:{
        table:'screens',
        field:'id',
      },
      onDelete:'cascade',
      onUpdate:'cascade'
    });

  },

  async down (queryInterface, Sequelize) {
      await queryInterface.dropTable('seats');
  }
};
