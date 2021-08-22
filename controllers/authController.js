const mongoose = require('mongoose')
const userSchema = require('../models/userAuth')

exports.googlePost = (req, res) => {
  const User = mongoose.model('User', userSchema)

  User.findOne({ googleId: req.body.googleId }, (err, user) => {
    if (err) {
      res.send(err)
    } else {
      if (!user) {
        const newUser = new User({
          Name: req.body.username,
          Email: req.body.email,
          googleId: req.body.googleId,
          facebookId: '-1',
          thumbnail: req.body.thumbnail
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

exports.facebookPost = (req, res) => {
  const User = mongoose.model('User', userSchema)

  User.findOne({ facebookId: req.body.facebookId }, (err, user) => {
    if (err) {
      res.send(err)
    } else {
      if (!user) {
        const newUser = new User({
          Name: req.body.username,
          Email: req.body.email,
          googleId: '-1',
          facebookId: req.body.facebookId,
          thumbnail: req.body.thumbnail
        })
        newUser.save(err => {
          if (err) {
            console.log(err)
          } else {
            res.send(req.body.facebookId)
          }
        })
      } else {
        res.send(req.body.facebookId)
      }
    }
  })
}
