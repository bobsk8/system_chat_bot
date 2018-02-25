'use strict';

const
  DataTypes = require('sequelize').DataTypes;

const SaleDaoModel = {
  id: {
    type: DataTypes.INTEGER.UNSIGNED,
    autoIncrement: true,
    primaryKey: true
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
