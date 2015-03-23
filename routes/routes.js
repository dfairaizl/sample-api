var express = require('express'),
    controllers = require('../controllers'),
    routes;

routes = function(middleware) {

  router = express.Router();

  // Retailers
  router.get('/retailers', controllers.retailers.index)

  //Products
  router.get('/products', controllers.products.index)

  return router;
}

module.exports = routes;
