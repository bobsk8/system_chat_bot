'use strict';

const
  dao = require('../dao/index').saleProductDao,
  models = require('../dao/index'),
  dataModel = require('./dataModel');

let
  saleProductModel;

saleProductModel = new dataModel(dao);

saleProductModel.create = _create;

module.exports.saleProductModel = saleProductModel;

function _create(saleProducts) {
  return Promise.all(saleProducts.map(saleProduct => {
    return this.DAO.create(saleProduct);
  }));
}