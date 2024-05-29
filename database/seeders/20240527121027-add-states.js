'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert('states',[{
      name:'Delhi',
      iso_code:'DL',
      createdAt:'2024-05-27 05:54:35',
      updatedAt:'2024-05-27 05:54:35'

    }],{})
    /**
     * 	id	int AI PK
	name	varchar(255)
	iso_code	varchar(255)
	createdAt	datetime
	updatedAt	datetime
     * Add seed commands here.
     *
     * Example:
     * await queryInterface.bulkInsert('People', [{
     *   name: 'John Doe',
     *   isBetaMember: false
     * }], {});
    */
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete('states', null, {});
  }
};
