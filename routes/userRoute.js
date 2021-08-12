require('dotenv').config()
const express = require('express')
const userRoute = require('../controllers/userController')
const passport = require('../passport')
router = express.Router()

router.post('/', passport.login)
router.post('/register', passport.register)
router.get('/dashboard', userRoute.checkUserLoggedIn, (req, res) => {
  return res.redirect(process.env.CLIENT_HOME_URL)
})
router.post('/logout', passport.logout)

module.exports = router
