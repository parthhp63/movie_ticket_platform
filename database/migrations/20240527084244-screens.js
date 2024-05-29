'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.createTable('screens',{
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      theater_id: {
        type: Sequelize.INTEGER
      },
      name: {
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

    queryInterface.addConstraint('screens',{
      fields:['theater_id'],
      type:'foreign key',
      references:{
        table:'theaters',
        field:'id',
      },
      onDelete:'cascade',
      onUpdate:'cascade'
    });
  },

  async down (queryInterface, Sequelize) {
     await queryInterface.dropTable('screens');
  }
};
