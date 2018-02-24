'use strict';
const
    config = require('config'),
    server = require('../dao/index'),
    roles = [{ id: 1, name: 'admin' }, { id: 2, name: 'user' }],
    category = [{ id: 1, name: 'game' }, { id: 2, name: 'eletrodomestico' }, { id: 3, name: 'limpeza' }],
    user = { name: 'Administrador', username: 'admin', pass: 'a665a45920422f9d417e4867efdc4fb8a04a1f3fff1fa07e998e86f7f7a27ae3', role_id: 1 };

//Config server

let dao = server(config);

(function create() {
    _init(dao);
})();


function _init(dao) {
    return dao.sequelize.sync({ force: true })
        .then(() => dao.roleDao.bulkCreate(roles))
        .then(() => dao.userDao.create(user))
        .then(() => dao.categoryDao.bulkCreate(category));
}