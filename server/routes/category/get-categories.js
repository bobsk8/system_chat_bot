'use strict';

const
  model = require('../../model/categoryModel').categoryModel;

module.exports = (req, res) => {

  model.findAll().then(data => res.send(data));

};
