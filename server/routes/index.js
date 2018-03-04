'use strict';

const
    productRouter = require('./product'),
    userRouter = require('./user'),
    googleRouter = require('./google'),
    uploadRouter = require('./upload'),
    categoryRouter = require('./category'),
    saleRouter = require('./sale');


function routerAdapter(app) {
    productRouter(app);
    userRouter(app);
    googleRouter(app);
    uploadRouter(app);
    categoryRouter(app);
    saleRouter(app);
}

module.exports = routerAdapter;
