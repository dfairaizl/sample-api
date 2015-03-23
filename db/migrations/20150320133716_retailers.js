'use strict';

exports.up = function(knex, Promise) {
  return knex.schema.createTable('retailers', function(t) {
    t.increments().primary();
    t.string('name').notNull();
    t.string('address1').notNull();
    t.string('address2').nullable();
    t.string('city').notNull();
    t.string('state').notNull();
    t.string('zip').notNull();
    t.dateTime('created_at').notNull();
    t.dateTime('updated_at').nullable();
  });
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('retailers');
};
