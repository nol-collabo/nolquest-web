var express = require('express');
var router = express.Router();
var targets = require('../targets')

/* GET List page. */
router.get('/list.html', function (req, res, next) {
  res.render('list.html.pug', {
    targets: targets.list
  })
});

/* GET home page. */
router.get('/', function (req, res, next) {
  res.redirect('/list.html');
});

router.get('/index.html', function (req, res, next) {
  res.render('index.html.pug', {
    styles: ['index.css'],
    scripts: ['index.js'],
    targets: targets.list,
    navTitle: "main"
  })
});

targets.list.forEach(function (element) {
  router.get('/' + element, function (req, res, next) {
    res.render(element + '.pug')
  });

}, this);

module.exports = router;