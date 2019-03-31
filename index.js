const express = require('express')
const logger = require('morgan')
const bodyParser = require('body-parser')
const expressValidator = require('express-validator')
const mongoose = require('mongoose')

const keys = require('./config/keys')

const app = express()

const { validateUser } = require('./middlewares/validateUser')

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
mongoose.connect(keys.MONGO_URI, { useNewUrlParser: true }).catch(err => console.error(err))

/**
 * Routes
 */
const movie = require('./routes/movie.route')
const user = require('./routes/user.route')
const search = require('./routes/search.route')
const genre = require('./routes/genre.route')

// app.get('/', function(req, res) {
//   res.json({ message: 'Welcome to Movie Ratings API' })
// })
app.use('/users', user)
app.use('/movies', validateUser, movie)
app.use('/search', validateUser, search)
app.use('/genres', validateUser, genre)

/**
 * Serve assets (React App) in production
 */
if (process.env.NODE_ENV === 'production') {
  // First hand: Serve specific file
  app.use(express.static('client/dist'))

  // Fallback: Serve index.html
  const path = require('path')
  app.get('*', (req, res) => {
    res.sendFile(path.resolve(__dirname, 'client', 'dist', 'index.html'))
  })
}

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
 * Run Server
 */
app.listen(keys.PORT, () => console.log(`Server running on port ${keys.PORT}`))

// Export app for integration tests
module.exports = app
