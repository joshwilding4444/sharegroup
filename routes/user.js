var express = require('express');
var router = express.Router();

router.get('/dashboard', function(req, res) {
  res.render('dashboard', {
		layout: 'template',
    title: 'User Dashboard!',
    welcome: 'Welcome to your dashboard!'
  })
})

module.exports = router
