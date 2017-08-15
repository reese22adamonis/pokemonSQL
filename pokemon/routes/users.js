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
  res.send('respond with a resource');
});




































module.exports = router;
