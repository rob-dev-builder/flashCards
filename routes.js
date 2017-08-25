var express = require('express')

var router = express.Router()

// var data = require('./data')

router.get('/', function (req, res) {
  // res.redirect('/flashcards')
  res.send('Welcome to flash cards')
})

router.get('/flashcard1', function (req, res) {
  // res.render('puppies/index', data.getAllPuppies())
  res.send('This is flash card 1')
})

module.exports = router
