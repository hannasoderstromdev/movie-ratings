const request = require('request-promise-native')
const keys = require('../config/keys')

module.exports = {
  /**
   * Search for movies in the Open Movie Database
   */

  // Sets res.locals and then defers to movie.controller.findExisting
  search: async (req, res, next) => {
    try {
      let response

      if (req.query.movieTitle) {
        response = await request(
          `http://www.omdbapi.com/?apikey=${keys.OMDB_API_KEY}&t=${req.query.movieTitle}`,
        )
      } else if (req.query.imdbId) {
        response = await request(
          `http://www.omdbapi.com/?apikey=${keys.OMDB_API_KEY}&i=${req.query.imdbId}`,
        )
      }

      const data = JSON.parse(response)

      if (data.Error) throw new Error(data.Error)

      const genres = data && data.Genre.split(', ')

      res.locals = {
        status: 'success',
        message: 'movie found',
        data: {
          title: data.Title,
          year: data.Year,
          released: data.Released,
          runtime: data.Runtime,
          genres,
          director: data.Director,
          writer: data.Writer,
          actors: data.Actors,
          plot: data.Plot,
          language: data.Language,
          country: data.Country,
          awards: data.Awards,
          poster: data.Poster,
          ratings: data.Ratings,
          metascore: data.Metascore,
          imdbRating: data.imdbRating,
          imdbVotes: data.imdbVotes,
          imdbID: data.imdbID,
          production: data.Production,
          website: data.Website,
        },
      }
      next()
    } catch (error) {
      next(error)
    }
  },
}
