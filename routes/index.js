var express = require('express');
var router = express.Router();
var appdata = require('../data.json');

/* GET home page. */
router.get('/', function(req, res) {
  var myArtwork = [];
  var myArtists = [];

  myArtists = appdata.scenes;
  appdata.scenes.forEach(function(item) {
    myArtwork = myArtwork.concat(item.artwork);
  });
  res.render('index', {
    title: 'Home',
    artwork: myArtwork,
    artists: myArtists,
    page: 'home'
  });
});

/* GET scenes page. */
router.get('/scenes', function(req, res) {
  var myArtwork = [];
  var myArtists = [];
  myArtists = appdata.scenes;

  appdata.scenes.forEach(function(item) {
    myArtwork = myArtwork.concat(item.artwork);
  });
  res.render('speakers', {
    title: 'scenes',
    artwork: myArtwork,
    artists: myArtists,
    page: 'artistList'
  });
});


/* GET scenes detail page */
router.get('/scenes/:speakerid', function(req, res) {
  var myArtwork = [];
  var myArtists = [];

  appdata.scenes.forEach(function(item) {
    if (item.shortname == req.params.speakerid) {
      myArtists.push(item);
      myArtwork = myArtwork.concat(item.artwork);
    }
  });
  res.render('speakers', {
    title: 'scenes',
    artwork: myArtwork,
    artists: myArtists,
    page: 'artistDetail'
  });
});




module.exports = router;