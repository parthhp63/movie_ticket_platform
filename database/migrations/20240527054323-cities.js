'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.createTable('cities',{
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      name: {
        type: Sequelize.STRING
      },
      state_code:{
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

    await queryInterface.addConstraint('cities',{
      fields:['state_code'],
      type:'foreign key',
      references:{
        table:'states',
        field:'iso_code',
      },
      onDelete:'cascade',
      onUpdate:'cascade'
    });


  },

  async down (queryInterface, Sequelize) {
    await queryInterface.dropTable('cities'); 
  }
};
