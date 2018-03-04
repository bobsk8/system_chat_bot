'use strict';

const
    saleModel = require('../../model/saleModel').saleModel;

module.exports = (req, res) => {
    let
        user_id = req.session.user.id;

    saleModel.getByUserId(user_id).then(data => res.send(data));

};