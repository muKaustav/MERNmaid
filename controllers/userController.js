const express = require('express')
const mongoose = require('mongoose')
const userData = require('../models/userData')

router = express.Router()

exports.checkUserLoggedIn = (req, res, next) => {
  if (req.user) {
    next()
  } else {
    res.redirect('/login')
  }
}

exports.getUser = (req, res) => {
  console.log(req.user)
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
