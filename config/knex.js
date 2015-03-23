var knex = require('knex')({
  client: 'sqlite3',
  connection: {
    filename: './db/dev.sqlite3'
  }
});

module.exports = knex;
