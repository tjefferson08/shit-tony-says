const express = require('express');
const app = express();
const knex = require('knex');
const ENV = process.env['NODE_ENV'] || 'development';
const PORT = Number(process.env['PORT'] || 8080);
const DB_CONFIG = require('./knexfile');
const pg = knex(DB_CONFIG[ENV]);

app.get('/', function(req, res) {
  res.send('Shit tony says is coming soon!');
});

app.listen(PORT, function() {
  console.log(`Example app listening on port ${PORT}!`);
});
