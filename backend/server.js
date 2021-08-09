const express = require('express')
const cors = require('cors')
const passport = require('passport')
const cookieSession = require('cookie-session')
const userRoute = require('./routes/userRoute')
const authRoute = require('./routes/authRoute')
const bodyParser = require('body-parser')
require('./passport')

const app = express()
app.use(
	bodyParser.urlencoded({
  extended: true
})
)
app.use(cors())
app.use(
	cookieSession({
  name: 'session-name',
  keys: ['key1', 'key2']
})
)

app.use(passport.initialize())
app.use(passport.session())

app.use('/', userRoute)
app.use('/', authRoute)

PORT = process.env.PORT || 5000

app.listen(PORT, () => {
  console.log(`server running on port ${PORT}.`)
})
