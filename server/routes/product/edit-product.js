'use strict';

const
  productModel = require('../../model/productModel').productModel;

module.exports = (req, res) => {
  let
    id = req.params.id,
    product = req.body;

    productModel.update(id,product).then(data => res.send(data));

};
