const mongoose = require('mongoose')
const userSchema = require('../models/userSchema')

exports.googlePost = (req, res) => {
  const User = mongoose.model('User', userSchema)

  User.findOne({ googleId: req.body.googleId }, (err, user) => {
    if (err) {
      res.send(err)
    } else {
      if (!user) {
        const newUser = new User({
          username: req.body.username,
          googleId: req.body.googleId
        })
        newUser.save(err => {
          if (err) {
            console.log(err)
          } else {
            res.send(req.body.googleId)
          }
        })
      } else {
        res.send(req.body.googleId)
      }
    }
  })
}

exports.githubPost = (req, res) => {
  const User = mongoose.model('User', userSchema)

  User.findOne({ githubId: req.body.githubId }, (err, user) => {
    if (err) {
      res.send(err)
    } else {
      if (!user) {
        const newUser = new User({
          username: req.body.username,
          githubId: req.body.githubId
        })
        newUser.save(err => {
          if (err) {
            console.log(err)
          } else {
            res.send(req.body.githubId)
          }
        })
      } else {
        res.send(req.body.githubId)
      }
    }
  })
}
