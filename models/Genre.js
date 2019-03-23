const mongoose = require('mongoose')

const Schema = mongoose.Schema

const GenreSchema = new Schema(
  {
    name: {
      type: String,
      required: true,
    },
  },
  {
    timestamps: true,
  },
)

GenreSchema.index({ name: 'text' }, { default_language: 'en', language_override: 'en' })

const Genre = mongoose.model('Genre', GenreSchema)

module.exports = Genre
