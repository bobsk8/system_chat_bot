'use strict';

const  
  dao = require('../dao/index').saleDao,
  models = require('../dao/index'),
  dataModel = require('./dataModel');

let
  saleModel;

saleModel = new dataModel(dao);

saleModel.getAll = _getAll;

module.exports.saleModel = saleModel;

function _getAll() {
  return this.DAO.findAll({
    include: [{ model: models.productDao, as: 'products'}]
  });
}

// function _create(sale) {    
//   return this.DAO.create(sale)
//   .then(persisted => {
//     return Promise.all(sale.products.map(product => {
//       return models.productDao.findOne({ where: { id: product.id } })
//         .then(product => {          
//           return persisted.setProducts([product]);
//         });
//     }));
//   })
// }