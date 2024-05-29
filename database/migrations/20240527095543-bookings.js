'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.createTable('bookings',{
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      user_id: {
        type: Sequelize.INTEGER
      },
      show_id: {
        type: Sequelize.INTEGER
      },
      booking_time: {
        type: Sequelize.DATE
      },
      ticket_no: {
        type: Sequelize.INTEGER
      },
      status: {
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

    queryInterface.addConstraint('bookings',{
      fields:['user_id'],
      type:'foreign key',
      references:{
        table:'users',
        field:'id',
      },
      onDelete:'cascade',
      onUpdate:'cascade'
    });

    queryInterface.addConstraint('bookings',{
      fields:['show_id'],
      type:'foreign key',
      references:{
        table:'shows',
        field:'id',
      },
      onDelete:'cascade',
      onUpdate:'cascade'
    });
  },
  async down (queryInterface, Sequelize) {
      await queryInterface.dropTable('bookings');
  }
};
