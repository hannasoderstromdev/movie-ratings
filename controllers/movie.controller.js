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
      }
    })
  },

  /**
   * Update Movie
   */
  updateById: function(req, res, next) {
    movieModel.findByIdAndUpdate(
      req.params.movieId,
      { title: req.body.title },
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
