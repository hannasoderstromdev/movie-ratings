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
          title,
          year,
          runtime,
          director,
          actors,
          poster,
          imdbID,
          rating,
        } of movies) {
          moviesList.push({
            id: _id,
            title,
            year,
            runtime,
            director,
            actors,
            poster,
            imdbID,
            rating,
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
          res.json({
            status: 'success',
            message: 'Movie updated successfully',
            data: movieInfo,
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
        title: req.body.title,
        year: req.body.year,
        runtime: req.body.runtime,
        director: req.body.director,
        actors: req.body.actors,
        poster: req.body.poster,
        imdbID: req.body.imdbID,
        rating: req.body.rating,
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
}
