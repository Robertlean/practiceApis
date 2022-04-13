'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class remito extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  remito.init({
    idClient: DataTypes.INTEGER,
    idProduct: DataTypes.INTEGER,
    idRemito: DataTypes.INTEGER,
    total: DataTypes.REAL
  }, {
    sequelize,
    modelName: 'remito',
  });
  return remito;
};