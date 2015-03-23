'use strict';

exports.seed = function(knex, Promise) {
    return Promise.join(
        // Deletes ALL existing entries
        knex('products').del(),

        // Inserts seed entries
        knex('products').insert({ id: 1, name: 'Rose', quantity: 100, created_at: new Date() })
    );
};
