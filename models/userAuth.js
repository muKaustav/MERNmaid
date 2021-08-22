const mongoose = require('mongoose')

const userSchema = new mongoose.Schema({
  Name: String,
  Email: String,
  googleId: String,
  facebookId: String,
  thumbnail: String
})

module.exports = userSchema
