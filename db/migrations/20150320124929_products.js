'use strict';

exports.up = function(knex, Promise) {
  return knex.schema.createTable('products', function(t) {
    t.increments().primary();
    t.integer('retailer_id').references('retailers.id');
    t.string('name').notNull();
    t.integer('quantity').notNull();
    t.dateTime('created_at').notNull();
    t.dateTime('updated_at').nullable();
  });
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('products');
};
