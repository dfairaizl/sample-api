var express = require('express'),

    config = require('../config'),
    knex = config.knex,
    bookshelf = require('bookshelf')(knex);

Product = bookshelf.Model.extend({
    tableName: 'products',
    hasTimestamps: true
});

module.exports = Product;
