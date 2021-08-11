const mongoose = require('mongoose')

const userSchema = new mongoose.Schema({
  Name: String,
  Password: String,
  googleId: String
})

module.exports = userSchema
