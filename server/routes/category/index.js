'use strict';

const
  path = '/api/v1/categories';

function categoryRouter(app) {

  app.route(path)
    .get(require('./get-categories'))
    .post(require('./create-category'));

  app.route(path + '/:id')
    .get(require('./get-category-by-id'))
    .put(require('./edit-category'))
    .delete(require('./delete-category'));


}


module.exports = categoryRouter;