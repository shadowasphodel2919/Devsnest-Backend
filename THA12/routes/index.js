var express = require('express');
var router = express.Router();
var registerInitialCheck = require('../middlewares/registerChecks');
var register = require('../controllers/register');
/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});
/**
 * @requires {email,fn,ln,pwd,cnfmpwd}
 * @description
 * Security, performance and edge cases
 * level 1
 * email validation
 * password validate - min 6
 * password == confirm
 * level 2
 * JS / SQL  -THA
 * level 3
 * check if email already exists
 * password hash
 * email lowercase
 * save
 */
router.post('/register',registerInitialCheck,register);
module.exports = router;
