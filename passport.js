require('dotenv').config()
const passport = require('passport')
const mongoose = require('mongoose')
const userSchema = require('./models/userAuth')
const passportLocalMongoose = require('passport-local-mongoose')
const GoogleStrategy = require('passport-google-oauth20').Strategy
const FacebookStrategy = require('passport-facebook').Strategy
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
      Email: profile.emails[0].value,
      googleId: profile.id,
      facebookId: '-1',
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
	new FacebookStrategy(
  {
    clientID: process.env.FACEBOOK_CLIENT_ID,
    clientSecret: process.env.FACEBOOK_CLIENT_SECRET,
    callbackURL: process.env.FACEBOOK_CALLBACK_URL,
    profileFields: [
      'id',
      'name',
      'picture.type(large)',
      'emails',
      'displayName'
    ]
  },
		(accessToken, refreshToken, profile, cb) => {
  console.log(profile)
  User.findOrCreate(
    {
      Name: profile.displayName,
      Email: profile.emails[0].value,
      googleId: '-1',
      facebookId: profile.id,
      thumbnail: profile.picture
    },
				(err, user) => {
  return cb(err, user)
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
