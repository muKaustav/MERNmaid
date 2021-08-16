const express = require('express')
const mongoose = require('mongoose')
const userData = require('../models/userData')
const https = require('https')

router = express.Router()

exports.emailVerify = (req, res, next) => {
  const email = req.body.username.toString()

  https.get(
		'https://api.trumail.io/v2/lookups/json?email=' + email,
		response => {
  response.on('data', data => {
    const eligible = JSON.parse(data)
    console.log(eligible)
    if (eligible['deliverable'] === true) {
      next()
    }
  })
}
	)
}

exports.checkUserLoggedIn = (req, res, next) => {
  if (req.user) {
    next()
  } else {
    res.redirect('/login')
  }
}

exports.getUser = (req, res) => {
  res.send(req.user)
}

exports.getUserData = (req, res) => {
  const Data = mongoose.model('userDatas', userData)

  Data.findOne({ Email: req.params.email.toString() }, (err, found) => {
    if (err) {
      res.send(err)
    } else {
      res.send(found)
    }
  })
}

exports.postUserData = (req, res) => {
  const Data = mongoose.model('userDatas', userData)

  const newData = new Data({
    Name: req.body.name,
    Email: req.body.email
  })

  newData.save(err => {
    if (err) {
      console.log(err)
    } else {
      res.send('Data added successfully!')
    }
  })
}
