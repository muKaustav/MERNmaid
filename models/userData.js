const mongoose = require('mongoose')

const userData = new mongoose.Schema({
  Name: String,
  Email: String
})

module.exports = userData
