'use strict';

const
  model = require('../../model/productModel').productModel;

module.exports = (req, res) => {

  model.getAll().then(data => res.send(data));

};
