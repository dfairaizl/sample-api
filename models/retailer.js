var express = require('express'),
    config = require('../config'),
    knex = config.knex,
    bookshelf = require('bookshelf')(knex),
    Product = require('./product');

Retailer = bookshelf.Model.extend({
    tableName: 'retailers',
    hasTimestamps: true,
    products: function() {
      return this.hasMany(Product);
    }
});

module.exports = Retailer;
