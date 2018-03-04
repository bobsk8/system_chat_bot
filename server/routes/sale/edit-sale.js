'use strict';

const
  saleModel = require('../../model/saleModel').saleModel;

module.exports = (req, res) => {
  let
    id = req.params.id,
    sale = req.body;

  saleModel.update(id, sale).then(data => res.send(data));

};
