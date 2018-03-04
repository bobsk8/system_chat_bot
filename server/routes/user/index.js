'use strict';

const
    path = '/api/v1/users',
    adminChecker		= require('../middleware/admin'),
    loginChecker		= require('../middleware/login');

function userRouter(app) {

    app.route(path)
        .post(require('./user-create'))

    app.route(path + '/login')
        .post(require('./login'));

    app.route(path + '/user-session')
        .get(loginChecker,require('./user-session'))

    app.route(path + '/user-logout')
        .get(loginChecker,require('./user-logout'))

    app.route(path + '/sales')
        .get(require('./user-sales'))

}


module.exports = userRouter;