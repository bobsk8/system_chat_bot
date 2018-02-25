'use strict';

function server(config) {
    const
        Sequelize = require('sequelize'),
        sequelize = new Sequelize(
            config.dbAccess.DATABASE,
            config.dbAccess.MYSQL_USER,
            config.dbAccess.PASSWORD,
            config.dbHost
        ),

        productDao  = sequelize.import('./productDao'),
        userDao     = sequelize.import('./userDao'),
        roleDao     = sequelize.import('./roleDao'),
        categoryDao = sequelize.import('./categoryDao'),
        saleDao     = sequelize.import('./saleDao');

    //Relations
    userDao.belongsTo(roleDao);
    productDao.belongsTo(categoryDao);
    userDao.hasMany(saleDao);
    saleDao.belongsTo(userDao);
    saleDao.belongsToMany(productDao, { through: 'product_sale'});    
     

    sequelize
        .authenticate()
        .then((err) => {
            console.log('Conected to DB');
        })
        .catch((err) => {
            console.log(`DB Conection failed: ${err}`);
        });

    module.exports = {
        sequelize,
        roleDao,
        productDao,
        categoryDao,
        userDao
    };

    return {
        sequelize,
        productDao,
        roleDao,
        categoryDao,
        userDao
    };
}

module.exports = server;
