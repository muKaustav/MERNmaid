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
    callbackURL: process.env.GOOGLE_CALLBACK_URL
  },
		(accessToken, refreshToken, profile, cb) => {
  User.findOrCreate(
    {
      Name: profile.displayName,
      Password: '-1',
      Email: profile.emails[0].value,
      googleId: profile.id,
      githubId: '-1'
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
      Password: '-1',
      Email: profile.emails[0].value,
      googleId: '-1',
      githubId: profile.id
    },
				(err, user) => {
  return done(err, user)
}
			)
}
	)
)

exports.register = (req, res) => {
  User.register(
		{ username: req.body.username },
		req.body.password,
		(err, user) => {
  if (err) {
    console.log(err)
    res.redirect(process.env.CLIENT_SIGNUP_URL)
  } else {
    passport.authenticate('local')(req, res, () => {
      res.redirect('/dashboard')
    })
  }
}
	)
}

exports.login = (req, res) => {
  let user = new User({
    username: req.body.username,
    password: req.body.password
  })

  req.login(user, err => {
    if (err) {
      console.log(err)
      res.redirect(process.env.CLIENT_SIGNIN_URL)
    } else {
      passport.authenticate('local')(req, res, () => {
        res.redirect('/dashboard')
      })
    }
  })
}

exports.logout = (req, res) => {
  req.session = null
  req.logout()
  res.redirect('/login')
}
