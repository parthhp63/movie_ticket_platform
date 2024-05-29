'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.createTable('shows',{
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      movie_id: {
        type: Sequelize.INTEGER
      },
      screen_id: {
        type: Sequelize.INTEGER
      },
      start_time: {
        type: Sequelize.STRING
      },
      end_time: {
        type: Sequelize.STRING
      },
      date: {
        type: Sequelize.DATEONLY
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


    queryInterface.addConstraint('shows',{
      fields:['movie_id'],
      type:'foreign key',
      references:{
        table:'movies',
        field:'id',
      },
      onDelete:'cascade',
      onUpdate:'cascade'
    });

    queryInterface.addConstraint('shows',{
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

      await queryInterface.dropTable('shows');

  }
};
