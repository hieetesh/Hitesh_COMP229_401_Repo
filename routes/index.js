var express = require('express');
var router = express.Router();

const socialMediaFooter = {
  email: 'dharmadhikarihitesh@gmail.com',
  socialMedia: [
    {
      name: 'GitHub',
      url: 'https://github.com/bchiang7',
    },
    {
      name: 'Instagram',
      url: 'https://www.instagram.com/bchiang7',
    },
    {
      name: 'Twitter',
      url: 'https://twitter.com/bchiang7',
    },
    {
      name: 'Linkedin',
      url: 'https://www.linkedin.com/in/bchiang7',
    },
  ],

}

// <% socialMediaFooter.socialMedia.forEach(function(handle, index) { %>
//   <h6><%= handle.name %></h6>
// <% }) %>


/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Home' , socialMediaFooter : socialMediaFooter });
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

module.exports = router;
