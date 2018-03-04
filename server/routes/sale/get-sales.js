'use strict';

const
  saleModel = require('../../model/saleModel').saleModel;

module.exports = (req, res) => {

  saleModel.getAll().then(data => res.send(data));

};
