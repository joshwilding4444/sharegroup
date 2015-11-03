var express = require('express')
var request = require('request')
var router = express.Router();

var ACCESS_TOKEN = '2067806435.1677ed0.1d8c2682dcfc42b095e29f3020caac52'

router.get('/dashboard', function(req, res){
  var options = {
    url: 'https://api.instagram.com/v1/users/self/feed?access_token=' + ACCESS_TOKEN
  }

  request.get(options, function(error, response, body){
    var feed = JSON.parse(body)
    //console.log(body)
    res.render('dashboard', {
       feed: feed.data,
       layout: 'auth_base',
       title: 'User Dashboard!',
       pageintro: 'Welcome to your dashboard!'
     })
  })

})

module.exports = router
