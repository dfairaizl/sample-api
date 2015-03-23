var express = require('express'),
    Promise = require('bluebird'),

    config = require('../config'),
    knex = config.knex,
    bookshelf = require('bookshelf')(knex);

Product = bookshelf.Model.extend({
    tableName: 'products',
    hasTimestamps: true
  },
  {
    onSale: function() {
      return knex.select('*')
                 .from('products')
                 .sum('quantity as quantity')
                 .groupBy('name')
                 .then(function(products) {
                    return products;
                  });
  }
});

module.exports = Product;
