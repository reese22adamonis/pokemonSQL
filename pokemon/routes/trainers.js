var express = require('express');
var router = express.Router();
var knex = require('knex')({
  client: 'pg',
  connection: {
    host : '127.0.0.1',
    database : 'example'
  }
});
/* GET users listing. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'trainers' });
});




































module.exports = router;