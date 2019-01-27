const movieModel = require('../models/Movie')

function filterValidMovieProps(props) {
  return {
    actors: props.actors,
    awards: props.awards,
    country: props.country,
    director: props.director,
    genre: props.genre,
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
  getById: async (req, res, next) => {
    console.log('getById')
    try {
      const movieInfo = await movieModel.findById(req.params.movieId)
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
    console.log('getAll')

    try {
      const moviesList = []

      const movies = await movieModel.find({})

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
      console.log('result', result)

      res.json({
        status: 'success',
        message: 'Movie added successfully',
        data: { id: result._id },
      })
    } catch (error) {
      console.log(error)
      next(error)
    }
  },

  // Middleware
  // depends on search.controller.search to set res.locals
  findExisting: async (req, res, next) => {
    // compare result to database titles and find out if it already exists
    try {
      const result = await movieModel.find({
        title: res.locals.data.title,
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

  findByTitle: async (req, res, next) => {
    console.log('findByTitle')
    try {
      const result = await movieModel
        .find({
          $text: {
            $search: `\"${req.params.title.toLowerCase()}\"`,
          },
        })
        .exec()

      const movieWithId = addIdToMovies(result)

      res.json({
        status: 'success',
        message: 'Found matching movie',
        data: movieWithId,
      })
    } catch (error) {
      console.error(error)
      next(error)
    }
  },
}
