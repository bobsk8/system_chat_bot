'use strict';

let
  model = require('../../model/userModel').userModel;

module.exports = (req, res) => {
  let
    user = req.body;

  user.role_id=2;
  
  model.createUser(user).then((data) => {
    res.send({ success: true });
  }).catch((err) => {
    console.log(err);
    res.send({ success: false });
  });

};
