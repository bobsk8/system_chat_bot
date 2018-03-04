'use strict';

const
  saleModel       = require('../../model/saleModel').saleModel,
  saleProductModel       = require('../../model/saleProductModel').saleProductModel;

module.exports = (req, res) => {
  let
    sale = req.body,
    saleProducts = [],
    total = 0;

    sale.products.forEach(product => {
      saleProducts.push({})
      total += (product.price * product.quantity);
    });
    sale.user_id=req.session.user.id;
    sale.total = total;
    
    saleModel.create(sale).then(data => {
      if(data.id){
        sale.products.forEach(product => {
          saleProducts.push({sale_id:data.id,product_id:product.id,quantity:product.quantity})
          total += (product.price * product.quantity);
        });        
        saleProductModel.create(saleProducts)
        .then(d => res.send(d))
      }
    });
};
