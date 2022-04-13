'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert('remitoClient', [{
     idProduct: 30504,
     cantidad: 3,
     idRemito: 1
    }], {});
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete('remitoClient', null, {});
  }
};
