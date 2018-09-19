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
    navTitle: "main"
  })
});

router.get('/mission_issue01.html', function (req, res, next) {
  res.render('mission_issue01.html.pug', {
    styles: ['mission.css'],
    scripts: ['mission.js'],
    navTitle: "mission"
  })
});

router.get('/mission_issue_no.html', function (req, res, next) {
  res.render('mission_issue_no.html.pug', {
    styles: ['mission.css'],
    scripts: ['mission.js'],
    navTitle: "mission"
  })
});

router.get('/mission_issue_check_loading.html', function (req, res, next) {
  res.render('mission_issue_check_loading.html.pug', {
    styles: ['mission.css'],
    scripts: ['mission.js'],
    navTitle: "mission-check"
  })
});

targets.list.forEach(function (element) {
  router.get('/' + element, function (req, res, next) {
    res.render(element + '.pug')
  });

}, this);

module.exports = router;