const express = require('express');
const app = express();
const knex = require('knex');
const ENV = process.env['NODE_ENV'] || 'development';
const PORT = Number(process.env['PORT'] || 8080);
const DB_CONFIG = require('./knexfile');

app.get('/', function(req, res) {
  res.send('Shit tony says is coming soon! SO SOON');
});

app.listen(PORT, function() {
  console.log(`Example app listening on port ${PORT}!`);
});
