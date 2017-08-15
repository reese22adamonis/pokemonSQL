var express = require('express');
var router = express.Router();
var knex = require('knex')({
  client: 'pg',
  connection: {
    host : '127.0.0.1',
    database : 'pokemon'
  }
});
/* GET users listing. */
// router.get('/', function(req, res, next) {




//   res.render('index', { title: 'pokemon' });
// });





router.get('/', function(req, res, next) {
  knex.raw('SELECT name FROM pokemons;')
    .then(function(data) {
      console.log(data.rows)
      res.render('all', {
        title: 'Express',
        allPokemon: data.rows
      });
    });
   });






























module.exports = router;