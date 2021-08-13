exports.checkUserLoggedIn = (req, res, next) => {
  if (req.user) {
    next()
  } else {
    res.redirect('/login')
  }
}

exports.getUser = (req, res) => {
  res.send(req.user)
}
