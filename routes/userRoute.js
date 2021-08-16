require('dotenv').config()
const express = require('express')
const userRoute = require('../controllers/userController')
const passport = require('../passport')

router = express.Router()

router.get(
	'/52408ce928fcece4a50261fcbb1c3a1556b12bd3ad2c32ee0fd5a8d429b46193/:email',
	userRoute.getUserData
)

router.post(
	'/52408ce928fcece4a50261fcbb1c3a1556b12bd3ad2c32ee0fd5a8d429b46193',
	userRoute.postUserData
)

router.get('/getUser', userRoute.getUser)

router.get('/dashboard', userRoute.checkUserLoggedIn)

router.get('/logout', passport.logout)

module.exports = router
