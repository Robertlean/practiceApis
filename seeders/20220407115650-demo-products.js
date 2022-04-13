'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert('Products', [{
      code: 30504,
      name: 'Empanadas de verdura',
      price: 1467.84,
      stock: 1,
      createdAt: new Date(),
      updatedAt: new Date()
    },{
      code: 30505,
      name: 'Empanadas de jamón y queso',
      price: 1467.84,
      stock: 1,
      createdAt: new Date(),
      updatedAt: new Date()
    },{
      code: 30506,
      name: 'Empanadas de carne suave',
      price: 1467.84,
      stock: 1,
      createdAt: new Date(),
      updatedAt: new Date()
    },{
      code: 30507,
      name: 'Empanadas de pollo',
      price: 1467.84,
      stock: 1,
      createdAt: new Date(),
      updatedAt: new Date()
    },{
      code: 30542,
      name: 'Empanadas de queso y cebolla',
      price: 1467.84,
      stock: 1,
      createdAt: new Date(),
      updatedAt: new Date()
    }], {});
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete('Products', null, {});
  }
};
