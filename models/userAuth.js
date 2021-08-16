const mongoose = require('mongoose')

const userSchema = new mongoose.Schema({
  Name: String,
  Email: String,
  googleId: String,
  githubId: String,
  thumbnail: String,
  details: Array
})

module.exports = userSchema
