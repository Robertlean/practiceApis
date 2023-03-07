'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert('remitoClients', [{
     idProduct: 30504,
     cantidad: 3,
     idRemito: 1,
     createdAt: new Date(),
    updatedAt: new Date()
    }], {});
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete('remitoClients', null, {});
  }
};
