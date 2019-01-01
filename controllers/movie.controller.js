const movieModel = require('../models/Movie')

module.exports = {
  /**
   * Get Movie By ID
   */

  getById: function(req, res, next) {
    movieModel.findById(req.params.movieId, function(err, movieInfo) {
      if (err) {
        next(err)
      } else {
        res.json({
          status: 'success',
          message: 'Movie found',
          data: { movies: movieInfo },
        })
      }
    })
  },

  /**
   * Get all Movies
   */
  getAll: function(req, res, next) {
    const moviesList = []

    movieModel.find({}, function(err, movies) {
      if (err) {
        next(err)
      } else {
        for (const {
          _id,
          actors,
          awards,
          country,
          director,
          genre,
          imdbID,
          imdbRating,
          imdbVotes,
          language,
          metascore,
          plot,
          poster,
          production,
          rating,
          ratings,
          released,
          runtime,
          title,
          website,
          writer,
          year,
        } of movies) {
          moviesList.push({
            id: _id,
            actors,
            awards,
            country,
            director,
            genre,
            imdbID,
            imdbRating,
            imdbVotes,
            language,
            metascore,
            plot,
            poster,
            production,
            rating,
            ratings,
            released,
            runtime,
            title,
            website,
            writer,
            year,
          })
        }
        if (moviesList.length === 0) {
          res.status(204).json({
            status: 'success',
            message: 'No movies available',
            data: null,
          })
        } else {
          res.status(200).json({
            status: 'success',
            message: 'All movies',
            data: moviesList,
          })
        }
      }
    })
  },

  /**
   * Update Movie
   */
  updateById: function(req, res, next) {
    const newValues = {}
    if (req.body.title) newValues.title = req.body.title
    if (req.body.year) newValues.year = req.body.year
    if (req.body.runtime) newValues.runtime = req.body.runtime
    if (req.body.director) newValues.director = req.body.director
    if (req.body.actors) newValues.actors = req.body.actors
    if (req.body.poster) newValues.poster = req.body.poster
    if (req.body.imdbID) newValues.imdbID = req.body.imdbID
    if (req.body.rating) newValues.rating = req.body.rating

    movieModel.findByIdAndUpdate(
      req.params.movieId,
      { ...newValues },
      { new: true, runValidators: true },
      function(err, movieInfo) {
        if (err) {
          next(err)
        } else {
          const {
            actors,
            awards,
            country,
            director,
            genre,
            imdbID,
            imdbRating,
            imdbVotes,
            language,
            metascore,
            plot,
            poster,
            production,
            rating,
            ratings,
            released,
            runtime,
            title,
            website,
            writer,
            year,
          } = movieInfo
          res.json({
            status: 'success',
            message: 'Movie updated successfully',
            data: {
              id: movieInfo._id,
              actors,
              awards,
              country,
              director,
              genre,
              imdbID,
              imdbRating,
              imdbVotes,
              language,
              metascore,
              plot,
              poster,
              production,
              rating,
              ratings,
              released,
              runtime,
              title,
              website,
              writer,
              year,
            },
          })
        }
      },
    )
  },

  /**
   * Delete Movie
   */
  deleteById: function(req, res, next) {
    movieModel.findByIdAndRemove(req.params.movieId, function(err, movieInfo) {
      if (err) {
        next(err)
      } else {
        res.json({
          status: 'success',
          message: 'Movie deleted successfully',
          data: null,
        })
      }
    })
  },

  create: function(req, res, next) {
    movieModel.create(
      {
        actors: req.body.actors,
        awards: req.body.awards,
        country: req.body.country,
        director: req.body.director,
        genre: req.body.genre,
        imdbID: req.body.imdbID,
        imdbRating: req.body.imdbRating,
        imdbVotes: req.body.imdbVotes,
        language: req.body.language,
        metascore: req.body.metascore,
        plot: req.body.plot,
        poster: req.body.poster,
        production: req.body.production,
        rating: req.body.rating,
        ratings: req.body.ratings,
        released: req.body.released,
        runtime: req.body.runtime,
        title: req.body.title,
        website: req.body.website,
        writer: req.body.writer,
        year: req.body.year,
      },
      function(err, result) {
        if (err) {
          next(err)
        } else {
          res.json({
            status: 'success',
            message: 'Movie added successfully',
            data: null,
          })
        }
      },
    )
  },

  // Middleware
  // depends on search.controller.search to set res.locals
  findExisting: function(req, res, next) {
    // compare result to database titles and find out if it already exists
    movieModel.find(
      {
        title: res.locals.data.title,
      },
      function(err, result) {
        if (err) {
          next(err)
        } else {
          if (result.length) {
            res.json({ ...res.locals, inLibrary: true })
          } else {
            res.json({ ...res.locals, inLibrary: false })
          }
        }
      },
    )
  },
}
