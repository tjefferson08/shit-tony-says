const express = require('express');
const app = express();
const ENV = process.env['NODE_ENV'] || 'development';
const PORT = Number(process.env['PORT'] || 8080);
const DB_CONFIG = require('./knexfile');
const knex = require('knex')(DB_CONFIG);
const cookieParser = require('cookie-parser');
const bodyParser = require('body-parser');
const expressValidator = require('express-validator');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(expressValidator());

app.set('view engine', 'pug');

app.get('/', function(req, res) {
  knex.select().table('quotes').orderByRaw('RANDOM()').first().then(quote => {
    res.render('home', { quote });
  });
});

app.get('/quotes', function(req, res) {
  knex.select().table('quotes').then(quotes => {
    res.render('quotes/index', { quotes });
  });
});

app.get('/quotes/new', function(req, res) {
  res.render('quotes/new');
});

app.post('/quotes', function(req, res) {
  knex('quotes')
    .insert({ body: req.body.quote })
    .then(() => {
      res.render('quotes/new');
    })
    .catch(console.error.bind(console));
});

app.listen(PORT, function() {
  console.log(`Example app listening on port ${PORT}!`);
});
