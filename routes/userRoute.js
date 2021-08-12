require('dotenv').config()
const express = require('express')
const userRoute = require('../controllers/userController')
const passport = require('../passport')

router = express.Router()

router.get('/dashboard', userRoute.checkUserLoggedIn)
router.get('/logout', passport.logout)
router.post('/login', passport.login)
router.post('/register', passport.register)

module.exports = router
