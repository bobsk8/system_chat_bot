'use strict';

const
  path = '/api/v1/sales',
  adminChecker		= require('../middleware/admin'),
  loginChecker		= require('../middleware/login');


function productRouter(app) {

  app.route(path)
    .get(loginChecker,require('./get-sales'))
    .post(adminChecker,require('./create-sale'));

  app.route(path + '/:id')
    .get(loginChecker,require('./get-sale-by-id'))
    .put(adminChecker,require('./edit-sale'))
    .delete(adminChecker,require('./delete-sale'));
}


module.exports = productRouter;