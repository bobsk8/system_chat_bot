'use strict';

const
  categoryModel = require('../../model/categoryModel').categoryModel;

module.exports = (req, res) => {
  let
    id = req.params.id,
    category = req.body;

    categoryModel.update(id,category).then(data => res.send(data));

};
