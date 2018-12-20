const express = require('express')
const logger = require('morgan')
const bodyParser = require('body-parser')
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

/**
 * Connect to MongoDB
 */

mongoose
  .connect(
    keys.mongoURI,
    { useNewUrlParser: true },
  )
  .catch(err => console.error(err))

/**
 * Routes
 */

const movie = require('./routes/movie.route')
const user = require('./routes/user.route')

app.get('/', function(req, res) {
  res.json({ message: 'Welcome to Movie Ratings API' })
})
app.use('/users', user)
app.use('/movies', validateUser, movie)

/**
 * 404 Handler
 */
app.use(function(req, res, next) {
  const err = new Error('Not Found')
  err.status = 404
  next(err)
})

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
  jwt.verify(req.headers['x-access-token'], keys.JWTSecret, function(
    err,
    decoded,
  ) {
    if (err) {
      res.json({ status: 'error', message: err.message, data: null })
    } else {
      req.body.userId = decoded.id
      next()
    }
  })
}

/**
 * Run Server
 */
const PORT = process.env.PORT || 5000
app.listen(PORT, () => console.log(`Server running on port ${PORT}`))

// Export app for integration tests
module.exports = app
