'use strict';

const
  path = '/api/v1/categories',
  adminChecker		= require('../middleware/admin'),
  loginChecker		= require('../middleware/login');

function categoryRouter(app) {

  app.route(path)
    .get(loginChecker,require('./get-categories'))
    .post(adminChecker,require('./create-category'));

  app.route(path + '/:id')
    .get(loginChecker,require('./get-category-by-id'))
    .put(adminChecker,require('./edit-category'))
    .delete(adminChecker,require('./delete-category'));


}


module.exports = categoryRouter;