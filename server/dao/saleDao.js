'use strict';

const
  DataTypes = require('sequelize').DataTypes;

const SaleDaoModel = {
  id: {
    type: DataTypes.INTEGER.UNSIGNED,
    autoIncrement: true,
    primaryKey: true
  },
  total: {
    type: DataTypes.DECIMAL(10,2)
  }
};


//// Export //////
module.exports = (sequelize) => {
  return sequelize.define(
    'sale',
    SaleDaoModel,
    {underscored: true}
  );
};
