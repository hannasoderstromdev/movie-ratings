const movieModel = require('../models/Movie')

function addIdToMovies(movies) {
  const moviesWithId = []
  for (const movie of movies) {
    moviesWithId.push({
      id: movie._id,
      actors: movie.actors,
      awards: movie.awards,
      country: movie.country,
      director: movie.director,
      genre: movie.genre,
      imdbID: movie.imdbID,
      imdbRating: movie.imdbRating,
      imdbVotes: movie.imdbVotes,
      language: movie.language,
      metascore: movie.metascore,
      plot: movie.plot,
      poster: movie.poster,
      production: movie.production,
      rating: movie.rating,
      ratings: movie.ratings,
      released: movie.released,
      runtime: movie.runtime,
      title: movie.title,
      website: movie.website,
      writer: movie.writer,
      year: movie.year,
    })
  }
  return moviesWithId
}

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
          data: { id: movieInfo._id },
        })
      }
    })
  },

  create: function(req, res, next) {
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
    } = req.body
    movieModel.create(
      {
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
      function(err, result) {
        if (err) {
          next(err)
        } else {
          res.json({
            status: 'success',
            message: 'Movie added successfully',
            data: { id: result._id },
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

  getLatest: async function(req, res, next) {
    // get the latest X nr of movies added
    try {
      const result = await movieModel
        .find({})
        .sort({ createdAt: 'desc' })
        .limit(parseInt(req.params.amount, 10))
        .exec()

      const moviesWithId = addIdToMovies(result)

      res.json({
        status: 'success',
        message: 'Found recent movies',
        data: moviesWithId,
      })
    } catch (error) {
      next(error)
    }
  },

  findByTitle: async function(req, res, next) {
    try {
      const result = await movieModel
        .find({
          $text: {
            $search: req.params.title.toLowerCase(),
          },
        })
        .exec()
      console.log('findByTitle', result)

      const movieWithId = addIdToMovies(result)

      res.json({
        status: 'success',
        message: 'Found matching movie',
        data: movieWithId,
      })
    } catch (error) {
      next(error)
    }
  },
}
