// Hello Professor, as we have discussed and agreed that I am creating a Single Page Application

var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Home', firstName: null });
});

/* GET About page. */
router.get('/about', function(req, res, next) {
  res.render('index', { title: 'About Me' });
});

/* GET Projects page. */
router.get('/projects', function(req, res, next) {
  res.render('index', { title: 'Projects' });
});

/* GET Services page. */
router.get('/services', function(req, res, next) {
  res.render('index', { title: 'Services' });
});

/* GET Contact US page. */
router.get('/contact', function(req, res, next) {
  res.render('index', { title: 'Contact Us' });
});

/* POST Contact Us page. */
router.post('/', function(req, res, next) {
  console.log("input: ", req.body);
  let firstName = req.body.fname || req.body.lname || req.body.email;
  res.render('index',{firstName: firstName});
});

module.exports = router;
