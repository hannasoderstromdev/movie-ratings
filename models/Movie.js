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
  released: {
    type: String,
    required: true,
  },
  runtime: {
    type: String,
    required: true,
  },
  genre: {
    type: String,
    required: true,
  },
  director: {
    type: String,
    required: true,
  },
  writer: {
    type: String,
    required: true,
  },
  actors: {
    type: String,
    required: true,
  },
  plot: {
    type: String,
    required: true,
  },
  language: {
    type: String,
    required: true,
  },
  country: {
    type: String,
    required: true,
  },
  awards: {
    type: String,
  },
  poster: {
    type: String,
    trim: true,
    required: true,
  },
  ratings: {
    type: Schema.Types.Mixed,
  },
  metascore: {
    type: String,
  },
  imdbRating: {
    type: String,
  },
  imdbID: {
    type: String,
    trim: true,
  },
  production: {
    type: String,
  },
  website: {
    type: String,
    trim: true,
  },
  rating: {
    type: Number,
    default: 0,
  },
})

MovieSchema.index({ title: 'text' })

const Movie = mongoose.model('Movie', MovieSchema)

module.exports = Movie
