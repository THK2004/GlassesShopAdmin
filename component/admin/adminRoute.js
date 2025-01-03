var express = require('express');
var router = express.Router();
var adminController = require('./adminController');

/* GET home page. */
router.get('/', function(req, res) {
  res.render('index');
});

router.get('/admin', function(req, res) {
  res.render('index');
});

/* Get management pages*/
router.get('/admin/manage-accounts', adminController.manageAccount);

router.get('/admin/manage-products', adminController.manageProduct);

router.get('/admin/manage-orders', adminController.manageOrder);

module.exports = router;
