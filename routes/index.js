var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Home' });
});

/* GET projects page. */
router.get('/projects', function(req, res, next) {
  res.render('projects', { title: 'Projects'
});
});


/* GET services page. */
router.get('/service', function(req, res, next) {
  res.render('service', { title: 'Service'
});
});


/* GET about me page. */
router.get('/aboutme', function(req, res, next) {
  res.render('aboutme', { title: 'About me'
});
});


/* GET contact me page. */
router.get('/contactme', function(req, res, next) {
  res.render('contactme', { title: 'Contact me'
});
});


module.exports = router;
