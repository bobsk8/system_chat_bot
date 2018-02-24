'use strict';

const
  categoryModel = require('../../model/categoryModel').categoryModel;

module.exports = (req, res) => {
  let
    category = req.body;

    categoryModel.create(category).then(data => res.send(data));

};
