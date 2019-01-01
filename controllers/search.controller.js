const request = require('request')
const keys = require('../config/keys')

module.exports = {
  /**
   * Search for movies in the Open Movie Database
   */

  // Sets res.locals and then defers to movie.controller.findExisting
  search: function(req, res, next) {
    const response = request(
      `http://www.omdbapi.com/?apikey=${keys.OMDB_API_KEY}&t=${
        req.query.movieTitle
      }`,
      function(error, response, body) {
        if (error) {
          next(error)
        } else {
          const data = JSON.parse(response.body)

          res.locals = {
            status: 'success',
            message: 'movie found',
            data: {
              title: data.Title,
              year: data.Year,
              released: data.Released,
              runtime: data.Runtime,
              genre: data.Genre,
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
        }
      },
    )
  },
}
