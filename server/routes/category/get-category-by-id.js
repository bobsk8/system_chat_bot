'use strict';

const
  categoryModel = require('../../model/categoryModel').categoryModel;

module.exports = (req, res) => {
  let
    id = req.params.id;

  categoryModel.findById(id).then(data => res.send(data));

};
