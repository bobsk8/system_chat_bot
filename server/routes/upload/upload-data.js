'use strict'

let
    multer = require('multer'),
    path = require('path'),
    data = new Date(),
    dataFormatada = 'produto',
    productModel = require('../../model/productModel').productModel;



module.exports = (req, res) => {
    let
        product_id = req.params.id,
        photoName,
        storage = multer.diskStorage({
            destination: function (req, file, callback) {
                callback(null, './uploads/')
            },
            filename: function (req, file, callback) {
                photoName = file.fieldname + '-' + dataFormatada + '-' + product_id + path.extname(file.originalname)
                callback(null, photoName)
            }
        }),
        upload = multer({
            storage: storage,
            fileFilter: function (req, file, callback) {
                let ext = path.extname(file.originalname)
                if (ext !== '.png' && ext !== '.jpg' && ext !== '.gif' && ext !== '.jpeg') {
                    return callback(res.end('Only images are allowed'), null)
                }
                callback(null, true)
            }
        }).single('photo');

    upload(req, res, function (err) {
        productModel.updatePhoto(product_id, photoName)
            .then(d => d);
        res.end('File is uploaded')
    })
};