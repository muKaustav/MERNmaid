const express = require('express')
const passport = require('passport')
const authRoute = require('../controllers/authController')

router = express.Router()

/* Google OAuth route SESSION */

router.get(
	'/auth/google',
	passport.authenticate('google', { scope: ['profile', 'email'] })
)

/* Google OAuth route callback SESSION */

router.get(
	'/auth/google/dashboard',
	passport.authenticate('google', { failureRedirect: '/failed' }),
	(req, res) => {
  res.redirect('/dashboard')
}
)

/* GitHub OAuth route SESSION */

router.get('/auth/facebook', passport.authenticate('facebook'))

/* Facebook OAuth route callback SESSION */

router.get(
	'/auth/facebook/dashboard',
	passport.authenticate('facebook', { failureRedirect: '/failed' }),
	(req, res) => {
  res.redirect('/dashboard')
}
)

/* Google OAuth route MOBILE */

router.post('/auth/android/google', authRoute.googlePost)

/* Facebook OAuth route MOBILE */

router.post('/auth/android/facebook', authRoute.facebookPost)

module.exports = router
