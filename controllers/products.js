var models = require('../models'),
    productsController;

productsController = {

  index: function(req, res, next) {
    models.Product.onSale().then(function(products) {
      res.status(200).json({ success: true, products: products });
    });
  }
}

module.exports = {
  index: productsController.index
}
