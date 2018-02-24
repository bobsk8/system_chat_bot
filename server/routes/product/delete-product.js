'use strict';

const
  productModel = require('../../model/productModel').productModel;

module.exports = (req, res) => {
  let
    id = req.params.id;

    productModel.destroy(id).then(data => res.send(data));

};
