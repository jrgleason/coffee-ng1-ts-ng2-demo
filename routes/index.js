var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});
router.get('/ng1', function(req, res, next) {
  res.render('ng1', { title: 'Express' });
});
router.get('/ng2', function(req, res, next) {
  res.render('ng2', { title: 'Express' });
});

module.exports = router;
