'use strict';

const
  path = '/api/v1/products',
  adminChecker		= require('../middleware/admin'),
  loginChecker		= require('../middleware/login');


function productRouter(app) {

  app.route(path)
    .get(loginChecker,require('./get-products'))
    .post(adminChecker,require('./create-product'));

  app.route(path + '/export-products')
    .get(adminChecker,require('./export-products'))

  app.route(path + '/:id')
    .get(loginChecker,require('./get-product-by-id'))
    .put(adminChecker,require('./edit-product'))
    .delete(adminChecker,require('./delete-product'));
}


module.exports = productRouter;