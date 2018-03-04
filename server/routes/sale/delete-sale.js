'use strict';

const
  saleModel = require('../../model/saleModel').saleModel;

module.exports = (req, res) => {
  let
    id = req.params.id;

  saleModel.destroy(id).then(data => res.send(data));

};
