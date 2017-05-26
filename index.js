const express = require('express');
const app = express();
const ENV = process.env['NODE_ENV'] || 'development';
const PORT = Number(process.env['PORT'] || 8080);
const DB_CONFIG = require('./knexfile');
const knex = require('knex')(DB_CONFIG);

app.set('view engine', 'pug');

app.get('/', function(req, res) {
  res.send('Shit tony says!');
});

app.get('/quotes', function(req, res) {
  knex.select().table('quotes').then((quotes) => {
    res.render('quotes/index', { quotes });
  });
});

app.get('/quotes/new', function(req, res) {
  res.render('quotes/new');
});

app.post('/quotes', function(req, res) {
  console.log('req', req.headers);
  res.send('naaaah');
});

app.listen(PORT, function() {
  console.log(`Example app listening on port ${PORT}!`);
});
