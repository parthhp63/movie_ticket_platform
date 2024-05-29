'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.createTable('movie_crews',{
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      movie_id: {
        type: Sequelize.INTEGER
      },
      crew_id:{
        type:Sequelize.INTEGER
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

    queryInterface.addConstraint('movie_crews',{
      fields:['movie_id'],
      type:'foreign key',
      references:{
        table:'movies',
        field:'id',
      },
      onDelete:'cascade',
      onUpdate:'cascade'
    });

    queryInterface.addConstraint('movie_crews',{
      fields:['crew_id'],
      type:'foreign key',
      references:{
        table:'crews',
        field:'id',
      },
      onDelete:'cascade',
      onUpdate:'cascade'
    });
  },

  async down (queryInterface, Sequelize) {
   await queryInterface.dropTable('movie_crews');
  }
};
