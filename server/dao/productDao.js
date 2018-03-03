'use strict';

const
  DataTypes = require('sequelize').DataTypes;

const productDaoModel = {
  id: {
    type: DataTypes.INTEGER.UNSIGNED,
    autoIncrement: true,
    primaryKey: true
  },
  name: {
    type: DataTypes.STRING
  },
  quantity: {
    type: DataTypes.INTEGER,
    defaultValue: 1
  },
  description: {
    type: DataTypes.STRING
  },
  photo: {
    type: DataTypes.STRING
  }
};


//// Export //////
module.exports = (sequelize) => {
  return sequelize.define(
    'product',
    productDaoModel,
    {underscored: true}
  );
};
