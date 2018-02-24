'use strict';

const
  DataTypes = require('sequelize').DataTypes;

const CategoryDaoModel = {
  id: {
    type: DataTypes.INTEGER.UNSIGNED,
    autoIncrement: true,
    primaryKey: true
  },
  name: {
    type: DataTypes.STRING
  }
};


//// Export //////
module.exports = (sequelize) => {
  return sequelize.define(
    'category',
    CategoryDaoModel,
    {underscored: true}
  );
};
