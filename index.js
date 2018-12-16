const express = require('express')
const logger = require('morgan')
const bodyParser = require('body-parser')

const movie = require('./routes/movie.route')
const user = require('./routes/user.route')

const keys = require('./config/keys')

const app = express()


/**
 * Utilities
 */
function validateUser(req, res, next) {
  jwt.verify(req.headers['x-access-token', keys.JWTSecret, function(err, decoded) {
    if (err) {
      res.json({ status: 'error', message: err.message, data: null })
    } else {
      req.body.userId = decoded.id
      next()
    }
  })
}

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
 * Middleware
 */
app.use(logger('dev'))
app.use(bodyParser.urlencoded({ extended: false }))

/**
 * Routes
 */
app.use('/user', user)
app.use('/movie', validateUser, movie)

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
  if (err.status === 404) {
    res.status(404).json({ message: 'Not found' })
  } else {
    res.status(500).json({ message: 'Server error' })
  }
})

/**
 * Run Server
 */
const PORT = process.env.PORT || 5000
app.listen(PORT, () => console.log(`Server running on port ${PORT}`))
