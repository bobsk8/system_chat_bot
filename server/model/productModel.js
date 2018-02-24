'use strict';

const  
  dao = require('../dao/index').productDao,
  models = require('../dao/index'),
  dataModel = require('./dataModel');

let
  productModel;

productModel = new dataModel(dao);

productModel.getAll = _getAll;

module.exports.productModel = productModel;

function _getAll() {
  return this.DAO.findAll({
    include: [{ model: models.categoryDao, as: 'category'}]
  });

}