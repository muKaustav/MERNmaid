require('dotenv').config()
const express = require('express')
const userRoute = require('../controllers/userController')
const passport = require('../passport')
router = express.Router()

router.get('/callback', userRoute.checkUserLoggedIn, (req, res) => {
  if (!req.user) {
    res.redirect('/login')
  } else {
    res.redirect('/dashboard')
  }
})
router.post('/login', passport.login)
router.post('/register', passport.register)
router.post('/logout', passport.logout)

module.exports = router
