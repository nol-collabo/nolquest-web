var request = require('request');
var async = require("async");
var fs = require('fs');
var targets = require('./targets')

var targetPages = targets.list

async.eachSeries(targetPages, function (pageName, callback) {
  console.log(pageName)
  request('http://localhost:8045/' + pageName, function (error, response, body) {
    if (!error && response.statusCode == 200) {
      fs.writeFile('./public/' + pageName, body, 'utf8', function (error) {
        console.log(pageName + ' writeFile completed');
        callback();
      });
    }
  })
}, function (err, result) {
  console.log('done')
})