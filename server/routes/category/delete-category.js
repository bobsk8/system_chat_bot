'use strict';

const
  categoryModel = require('../../model/categoryModel').categoryModel;

module.exports = (req, res) => {
  let
    id = req.params.id;

    categoryModel.destroy(id).then(data => res.send(data));

};
