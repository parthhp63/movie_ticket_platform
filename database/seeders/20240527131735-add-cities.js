'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert('cities',[{
      name:'surat',
      state_code:'GJ',
      createdAt:'2024-05-27 05:54:35',
      updatedAt:'2024-05-27 05:54:35'

    }])
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete('cities', null, {});
  }
  
};
