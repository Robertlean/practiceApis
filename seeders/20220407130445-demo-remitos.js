'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert('Remito', [{
      idClient: 1,
      idRemito: 1,
      price: 1478.86,
      createdAt: new Date(),
      updatedAt: new Date()
    },{
      idClient: 1,
      idRemito: 1,
      price: 2738.20,
      createdAt: new Date(),
      updatedAt: new Date()
    }], {});   
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete('Remito', null, {});
  }
};
