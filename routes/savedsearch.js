var express = require('express');
var router = express.Router();

router.get('/savedsearch', function(req, res){
  res.render('savedsearch', {
    layout: "template"
  })
})

module.exports = router
