'use strict';

const  
  dao = require('../dao/index').categoryDao,
  dataModel = require('./dataModel');

let
  categoryModel;

categoryModel = new dataModel(dao);

module.exports.categoryModel = categoryModel;