var express = require('express');
var router = express.Router();

/** GET home page. - Check app`s health **/
router.get('/', function(req, res, next) {
  res.render('index');
});

module.exports = router;
