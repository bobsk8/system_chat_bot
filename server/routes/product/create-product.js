'use strict';

const
  productModel = require('../../model/productModel').productModel;

module.exports = (req, res) => {
  let
    product = req.body;

    productModel.create(product).then(data => res.send(data));

};
