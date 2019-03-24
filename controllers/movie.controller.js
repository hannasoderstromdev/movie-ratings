const { body, param } = require('express-validator/check')

const movieModel = require('../models/Movie')
const genreModel = require('../models/Genre')

function filterValidMovieProps(props) {
  return {
    actors: props.actors,
    awards: props.awards,
    country: props.country,
    director: props.director,
    genres: props.genres,
    imdbID: props.imdbID,
    imdbRating: props.imdbRating,
    imdbVotes: props.imdbVotes,
    language: props.language,
    metascore: props.metascore,
    plot: props.plot,
    poster: props.poster,
    production: props.production,
    rating: props.rating,
    ratings: props.ratings,
    released: props.released,
    runtime: props.runtime,
    title: props.title,
    website: props.website,
    writer: props.writer,
    year: props.year,
  }
}

function addIdToMovies(movies) {
  const moviesWithId = []
  for (const movie of movies) {
    moviesWithId.push({
      id: movie._id,
      actors: movie.actors,
      awards: movie.awards,
      country: movie.country,
      director: movie.director,
      genres: makeGenresObject(movie.genres),
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

function makeGenresObject(genres) {
  const newGenres = {}
  for (const genre of genres) {
    newGenres[genre._id] = { name: genre.name }
  }
  return newGenres
}

module.exports = {
  /**
   * Get Movie By ID
   */
  getById: async (req, res, next) => {
    try {
      const movieInfo = await movieModel.findById(req.params.movieId).populate('genres')
      res.json({
        status: 'success',
        message: 'Movie found',
        data: { movies: movieInfo },
      })
    } catch (error) {
      next(error)
    }
  },

  /**
   * Get all Movies
   */
  getAll: async (req, res, next) => {
    try {
      const { limit, page, filterGenres, filterRating } = req.query

      const conditions = {}

      if (filterGenres) {
        conditions.genres = { $in: JSON.parse(filterGenres) }
      }

      if (filterRating) {
        conditions.rating = filterRating
      }

      const movies = await movieModel
        .find(conditions)
        .populate('genres')
        .sort({ createdAt: 'desc' })
        .skip(limit * (page - 1))
        .limit(parseInt(limit, 10))

      const numberOfItems = await movieModel.count()

      if (movies.length === 0) {
        res.status(204).json({
          status: 'success',
          message: 'No movies available',
          data: {
            movies: [],
            numberOfItems,
            page,
            limit,
          },
        })
      } else {
        res.status(200).json({
          status: 'success',
          message: 'All movies',
          data: {
            movies: addIdToMovies(movies),
            numberOfItems: numberOfItems,
            page,
            limit,
          },
        })
      }
    } catch (error) {
      next(error)
    }
  },

  /**
   * Update Movie
   */
  updateById: async (req, res, next) => {
    const newValues = {}

    if (req.body.title) newValues.title = req.body.title
    if (req.body.year) newValues.year = req.body.year
    if (req.body.runtime) newValues.runtime = req.body.runtime
    if (req.body.director) newValues.director = req.body.director
    if (req.body.actors) newValues.actors = req.body.actors
    if (req.body.poster) newValues.poster = req.body.poster
    if (req.body.imdbID) newValues.imdbID = req.body.imdbID
    if (req.body.rating) newValues.rating = req.body.rating

    try {
      const movieInfo = await movieModel.findByIdAndUpdate(
        req.params.movieId,
        { ...newValues },
        { new: true, runValidators: true },
      )

      res.json({
        status: 'success',
        message: 'Movie updated successfully',
        data: {
          id: movieInfo._id,
          ...filterValidMovieProps(movieInfo),
        },
      })
    } catch (error) {
      next(error)
    }
  },

  /**
   * Delete Movie
   */
  deleteById: async (req, res, next) => {
    try {
      const movieInfo = await movieModel.findByIdAndRemove(req.params.movieId)

      res.json({
        status: 'success',
        message: 'Movie deleted successfully',
        data: { id: movieInfo._id },
      })
    } catch (error) {
      next(error)
    }
  },

  create: async (req, res, next) => {
    try {
      const result = await movieModel.create({
        ...filterValidMovieProps(req.body),
      })

      res.json({
        status: 'success',
        message: 'Movie added successfully',
        data: { id: result._id },
      })
    } catch (error) {
      next(error)
    }
  },

  // Middleware
  // depends on search.controller.search to set res.locals
  findExisting: async (req, res, next) => {
    const { genres, title } = res.locals.data

    try {
      // Check if genres exists, otherwise add them to database
      const existingGenres = await genreModel.distinct('name')

      for (const genre of genres) {
        if (!existingGenres.includes(genre)) {
          const result = await genreModel.create({ name: genre })
        }
      }
    } catch (error) {
      next(error)
    }

    // compare result to database titles and find out if it already exists
    try {
      res.locals.data.genres = await genreModel.find({ name: { $in: genres } })

      const result = await movieModel.find({
        title,
      })

      if (result.length) {
        res.json({ ...res.locals, inLibrary: true })
      } else {
        res.json({ ...res.locals, inLibrary: false })
      }
    } catch (error) {
      next(error)
    }
  },

  getLatest: async (req, res, next) => {
    // get the latest X nr of movies added
    try {
      const result = await movieModel
        .find({})
        .populate('genres')
        .sort({ createdAt: 'desc' })
        .limit(parseInt(req.params.amount, 10))
        .exec()

      res.json({
        status: 'success',
        message: 'Found recent movies',
        data: addIdToMovies(result),
      })
    } catch (error) {
      next(error)
    }
  },

  findByTitle: async (req, res, next) => {
    console.log('findByTitle')
    try {
      const result = await movieModel
        .find({
          $text: {
            $search: `\"${req.params.title}\"`,
          },
        })
        .populate('genres')
        .exec()

      res.json({
        status: 'success',
        message: 'Found matching movie',
        data: addIdToMovies(result),
      })
    } catch (error) {
      next(error)
    }
  },

  getByGenre: async (req, res, next) => {
    console.log('getByGenre')

    try {
      const result = await movieModel
        .find({ genres: req.params.genre })
        .populate('genres')
        .exec()

      res.json({
        status: 'success',
        message: 'Found matching movies',
        data: addIdToMovies(result),
      })
    } catch (error) {
      next(error)
    }
  },

  getByRating: async (req, res, next) => {
    console.log('getByRating')
    try {
      const result = await movieModel
        .find({
          rating: req.params.rating,
        })
        .populate('genres')
        .exec()

      res.json({
        status: 'success',
        message: 'Found matching movies',
        data: addIdToMovies(result),
      })
    } catch (error) {
      next(error)
    }
  },

  getRandom: async (req, res, next) => {
    console.log('getRandom')
    try {
      const result = await movieModel
        .aggregate([{ $sample: { size: req.params.amount } }])
        .populate('genres')
        .exec()

      res.json({
        status: 'success',
        message: `Found ${req.params.amount} movies`,
        data: addIdToMovies(result),
      })
    } catch (error) {
      next(error)
    }
  },

  validate: method => {
    switch (method) {
      case 'findByTitle':
        return [
          body('title', 'title does not exists').exists(),
          body('title', 'Invalid title').isString(),
        ]

      case 'getByGenre':
        return [
          param('genre', 'genre does not exist').exists(),
          param('genre', 'genre must be a string').isString(),
        ]

      case 'create':
        return [
          body('title', 'title must be a String')
            .exists()
            .isString(),
          body('year', 'year must be a String')
            .exists()
            .isString(),
          body('released', 'released must be a String')
            .exists()
            .isString(),
          body('runtime', 'runtime must be a String')
            .exists()
            .isString(),
          body('genres', 'genre must be an Array')
            .exists()
            .isArray(),
          body('director', 'director must be a String')
            .exists()
            .isString(),
          body('writer', 'writer must be a String')
            .exists()
            .isString(),
          body('actors', 'actors must be a String')
            .exists()
            .isString(),
          body('plot', 'plot must be a String')
            .exists()
            .isString(),
          body('language', 'language must be a String')
            .exists()
            .isString(),
          body('country', 'country must be a String')
            .exists()
            .isString(),
          body('awards', 'awards must be a String')
            .exists()
            .isString(),
          body('poster', 'poster must be a String')
            .exists()
            .isString(),
          body('ratings', 'ratings must be included').exists(),
          body('metascore', 'metascore must be a String')
            .exists()
            .isString(),
          body('imdbRating', 'imdbRating must be a String')
            .exists()
            .isString(),
          body('imdbID', 'imdbID must be a String')
            .exists()
            .isString(),
          body('production', 'production must be a String')
            .exists()
            .isString(),
          body('website', 'website must be a String')
            .optional()
            .isString(),
          body('rating', 'rating must be an Integer')
            .optional()
            .isInt(),
        ]

      case 'getById':
        return [
          param('movieId', 'movieId must be a number')
            .exists()
            .isInt(),
        ]

      case 'updateById':
        return [
          param('movieId', 'movieId must be a number')
            .exists()
            .isInt(),
        ]

      case 'deleteById':
        return [
          param('movieId', 'movieId must be a number')
            .exists()
            .isInt(),
        ]
    }
  },
}
