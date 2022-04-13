'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
    return queryInterface.bulkInsert('Clients', [{
      numberClient: 1034,
      firstName: 'Corina',
      lastName: 'Gonzalez',
      address: 'Sarmiento 435',
      city: 'Pilar',
      phoneNumber: 1141808305,
      createdAt: new Date(),
      updatedAt: new Date()
    },
  {
    numberClient: 1133,
    firstName: 'Julieta',
    lastName: 'Duhau',
    address: 'Las Heras 371 dto 3, Villa Morra',
    city: 'Pilar',
    phoneNumber: 1158457498,
    createdAt: new Date(),
    updatedAt: new Date()
  },{
    numberClient: 1025,
    firstName: 'Diego',
    lastName: 'Salazar',
    address: 'Tucumán 526',
    city: 'Pilar',
    phoneNumber: 1162759887,
    createdAt: new Date(),
    updatedAt: new Date()
  }], {});
  },

  async down (queryInterface, Sequelize) {
    return queryInterface.bulkDelete('Clients', null, {});
  }
};
