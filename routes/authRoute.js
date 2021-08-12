const express = require('express')
const passport = require('passport')
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
  res.redirect('/dashboard')
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
  res.redirect('/dashboard')
}
)

router.post('/auth/android/google', authRoute.googlePost)

router.post('/auth/android/github', authRoute.githubPost)

module.exports = router
