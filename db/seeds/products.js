'use strict';

exports.seed = function(knex, Promise) {
    return Promise.join(
        // Deletes ALL existing entries
        knex('products').del(),

        // Inserts seed entries
        knex('products').insert({ id: 1, name: 'Rose', quantity: 15, retailer_id: 1, created_at: new Date() }),
        knex('products').insert({ id: 2, name: 'Rose', quantity: 10, retailer_id: 2, created_at: new Date() }),

        knex('products').insert({ id: 3, name: 'Lilly', quantity: 15, retailer_id: 2, created_at: new Date() }),
        knex('products').insert({ id: 4, name: 'Lilly', quantity: 5, retailer_id: 3, created_at: new Date() }),

        knex('products').insert({ id: 5, name: 'Sunflower', quantity: 5, retailer_id: 1, created_at: new Date() }),
        knex('products').insert({ id: 6, name: 'Sunflower', quantity: 20, retailer_id: 2, created_at: new Date() })
    );
};
