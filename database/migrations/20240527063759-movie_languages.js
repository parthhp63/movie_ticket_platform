'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.createTable('movie_languages',{
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      movie_id: {
        type: Sequelize.INTEGER
      },
      language_id: {
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
    queryInterface.addConstraint('movie_languages',{
      fields:['movie_id'],
      type:'foreign key',
      references:{
        table:'movies',
        field:'id',
      },
      onDelete:'cascade',
      onUpdate:'cascade'
    });
    queryInterface.addConstraint('movie_languages',{
      fields:['language_id'],
      type:'foreign key',
      references:{
        table:'languages',
        field:'id',
      },
      onDelete:'cascade',
      onUpdate:'cascade'
    });
  },
  async down (queryInterface, Sequelize) {
      await queryInterface.dropTable('movie_languages');
  }
};
