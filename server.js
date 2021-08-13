const express = require('express')
const cors = require('cors')
const path = require('path')
const passport = require('passport')
const cookieSession = require('cookie-session')
const userRoute = require('./routes/userRoute')
const authRoute = require('./routes/authRoute')
const bodyParser = require('body-parser')
require('./passport')

const app = express()

app.use(express.static(path.join(__dirname, 'client', 'build')))
app.use(
	bodyParser.urlencoded({
  extended: true
})
)
app.use(cors())
app.use(
	cookieSession({
  name: 'session',
  keys: ['key1', 'key2']
})
)

app.all('/*', (req, res, next) => {
  res.header('Access-Control-Allow-Origin', '*')
  next()
})

app.use(passport.initialize())
app.use(passport.session())

app.use('/', userRoute)
app.use('/', authRoute)

app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'client', 'build', 'index.html'))
})

PORT = process.env.PORT || 5000

app.listen(PORT, () => {
  console.log(`server running on port ${PORT}.`)
})
