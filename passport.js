require('dotenv').config()
const passport = require('passport')
const mongoose = require('mongoose')
const userSchema = require('./models/userAuth')
const passportLocalMongoose = require('passport-local-mongoose')
const GoogleStrategy = require('passport-google-oauth20').Strategy
const GitHubStrategy = require('passport-github2').Strategy
const findOrCreate = require('mongoose-findorcreate')
const bodyParser = require('body-parser')

mongoose.connect(process.env.DB_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useFindAndModify: false
})

mongoose.set('useCreateIndex', true)

userSchema.plugin(passportLocalMongoose)
userSchema.plugin(findOrCreate)

const User = new mongoose.model('User', userSchema)

passport.use(User.createStrategy())

passport.serializeUser((user, done) => {
  done(null, user.id)
})

passport.deserializeUser((id, done) => {
  User.findById(id, (err, user) => {
    done(err, user)
  })
})

passport.use(
	new GoogleStrategy(
  {
    clientID: process.env.GOOGLE_CLIENT_ID,
    clientSecret: process.env.GOOGLE_CLIENT_SECRET,
    callbackURL: process.env.LOCAL_GOOGLE_CALLBACK_URL
  },
		(accessToken, refreshToken, profile, cb) => {
  User.findOrCreate(
    {
      Name: profile.displayName,
      Email: profile.emails[0].value,
      googleId: profile.id,
      githubId: '-1',
      thumbnail: profile._json['picture']
    },
				(err, user) => {
  return cb(err, user)
}
			)
}
	)
)

passport.use(
	new GitHubStrategy(
  {
    clientID: process.env.GITHUB_CLIENT_ID,
    clientSecret: process.env.GITHUB_CLIENT_SECRET,
    callbackURL: process.env.GITHUB_CALLBACK_URL
  },
		(accessToken, refreshToken, profile, done) => {
  User.findOrCreate(
    {
      Name: profile.displayName,
      Email: profile.emails[0].value,
      googleId: '-1',
      githubId: profile.id,
      thumbnail: profile._json['avatar_url']
    },
				(err, user) => {
  return done(err, user)
}
			)
}
	)
)

exports.logout = (req, res) => {
  req.session = null
  req.logout()
  res.redirect('/login')
}
