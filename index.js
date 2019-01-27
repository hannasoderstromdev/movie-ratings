const express = require('express')
const logger = require('morgan')
const bodyParser = require('body-parser')
const expressValidator = require('express-validator')
const jwt = require('jsonwebtoken')
const mongoose = require('mongoose')

const keys = require('./config/keys')

const app = express()

/**
 * Middleware
 */
app.use(logger('dev'))
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json({ type: 'application/json' }))
app.use(expressValidator())
/**
 * Connect to MongoDB
 */

mongoose
  .connect(
    keys.MONGO_URI,
    { useNewUrlParser: true },
  )
  .catch(err => console.error(err))

/**
 * Routes
 */

const movie = require('./routes/movie.route')
const user = require('./routes/user.route')
const search = require('./routes/search.route')

app.get('/', function(req, res) {
  res.json({ message: 'Welcome to Movie Ratings API' })
})
app.use('/users', user)
app.use('/movies', validateUser, movie)
app.use('/search', validateUser, search)

/**
 * Error Handler
 */
app.use(function(err, req, res, next) {
  switch (err.status) {
    case 400:
      res.status(400).json({ message: 'Bad Request' })
      break

    case 403:
      res.status(403).json({ message: 'Unauthorized' })
      break

    case 404:
      res.status(404).json({ message: 'Not Found' })
      break

    default:
      res.status(500).json({ message: 'Server error: ' + err.message })
      break
  }
})

/**
 * Utilities
 */
function validateUser(req, res, next) {
  jwt.verify(req.headers['x-access-token'], keys.JWT_SECRET, function(err, decoded) {
    if (err) {
      res.status(403).json({ status: 'error', message: err.message, data: null })
    } else {
      req.body.userId = decoded.id
      next()
    }
  })
}

/**
 * Run Server
 */
app.listen(keys.PORT, () => console.log(`Server running on port ${keys.PORT}`))

// Export app for integration tests
module.exports = app
