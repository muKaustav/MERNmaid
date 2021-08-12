const express = require('express')
const passport = require('passport')
var deeplink = require('node-deeplink')
const authRoute = require('../controllers/authController')
router = express.Router()

router.get(
	'/auth/google',
	passport.authenticate('google', { scope: ['profile', 'email'] })
)

router.get(
	'/auth/google/dashboard',
	passport.authenticate('google', { failureRedirect: '/failed' }),
	(req, res) => {
  res.redirect('/callback')
}
)

router.get(
	'/auth/github',
	passport.authenticate('github', { scope: ['user:email'] })
)

router.get(
	'/auth/github/dashboard',
	passport.authenticate('github', { failureRedirect: '/failed' }),
	(req, res) => {
  res.redirect(
			'/callback',
			deeplink({
  fallback: 'https://mernmaid.herokuapp.com/login'
})
		)
}
)

router.post('/auth/android/google', authRoute.googlePost)

module.exports = router
