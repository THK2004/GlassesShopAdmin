var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res) {
  res.render('index');
});

router.get('/admin', function(req, res) {
  res.render('index');
});

router.get('/admin/manage-account', function(req, res) {
  res.render('index');
});

router.get('/admin/manage-product', function(req, res) {
  res.render('index');
});

router.get('/admin/manage-order', function(req, res) {
  res.render('index');
});

module.exports = router;
