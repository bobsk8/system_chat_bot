'use strict';

const
  DataTypes = require('sequelize').DataTypes;

const SaleProductDaoModel = {
  id: {
    type: DataTypes.INTEGER.UNSIGNED,
    autoIncrement: true,
    primaryKey: true
  },
  quantity: {
    type: DataTypes.INTEGER.UNSIGNED
  }
};


//// Export //////
module.exports = (sequelize) => {
  return sequelize.define(
    'sale_product',
    SaleProductDaoModel,
    {underscored: true}
  );
};