'use strict';

exports.seed = function(knex, Promise) {
    return Promise.join(
        // Deletes ALL existing entries
        knex('retailers').del(),

        // Inserts seed entries
        knex('retailers').insert({ id: 1, name: 'East Side Flowers', address1: '100 E 15th st', address2: 'Suite 1A', city: "New York", state: 'NY', zip: '10002', created_at: new Date() }),
        knex('retailers').insert({ id: 2, name: 'West Side Flowers', address1: '234 W 15th st', address2: '', city: "New York", state: 'NY', zip: '10010', created_at: new Date() }),
        knex('retailers').insert({ id: 3, name: 'Downtown Flower Shop', address1: '1 Water st', address2: '', city: "New York", state: 'NY', zip: '10043', created_at: new Date() })
    );
};
