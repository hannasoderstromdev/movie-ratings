const mongoose = require('mongoose')

const Schema = mongoose.Schema

const MovieSchema = new Schema({
  title: {
    type: String,
    required: true,
  },
  year: {
    type: String,
    trim: true,
    required: true,
  },
  runtime: {
    type: String,
    required: true,
  },
  director: {
    type: String,
    required: true,
  },
  actors: {
    type: String,
    required: true,
  },
  poster: {
    type: String,
    trim: true,
    required: true,
  },
  imdbID: {
    type: String,
    trim: true,
    required: true,
  },
  rating: {
    type: Number,
    default: 0,
  },
})

const Movie = mongoose.model('Movie', MovieSchema)

module.exports = Movie
