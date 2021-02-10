var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Home' });
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
router.post('/contact', function(req, res, next) {
  console.log("input123: ", req.body);
  contactName = req.body.fname;
  res.redirect('/');
});

module.exports = router;
