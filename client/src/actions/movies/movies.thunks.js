import moviesActions from './movies.actions'
import errorHandlerActions from 'actions/errorHandler/errorHandler.actions'

import moviesService from 'services/movies/movies.service'

const getAllMovies = ({ limit, page }) => async dispatch => {
  dispatch(moviesActions.getAllMovies())

  try {
    const { data } = await moviesService.getAll({ limit, page })
    if (data) {
      dispatch(
        moviesActions.getAllMoviesSuccess({
          movies: data && data.movies,
          numberOfItems: parseInt(data && data.numberOfItems),
          limit: parseInt(data && data.limit),
          page: parseInt(data && data.page),
        }),
      )
    } else {
      // Only happens if there are no movies added yet
      dispatch(
        moviesActions.getAllMoviesSuccess({
          movies: [],
          numberOfItems: 0,
          limit,
          page,
        }),
      )
    }
  } catch (error) {
    dispatch(
      errorHandlerActions.setError({
        type: 'danger',
        status: error.status,
        message: error.message,
      }),
    )
    dispatch(moviesActions.getAllMoviesFailure())
  }
}

const getMoviesFiltered = ({ limit, page, filters }) => async dispatch => {
  try {
    const { data } = await moviesService.getFiltered({ limit, page, filters })
    if (data) {
      dispatch(
        moviesActions.getMoviesSuccess({
          movies: data && data.movies,
          numberOfItems: parseInt(data && data.numberOfItems),
          limit: parseInt(data && data.limit),
          page: parseInt(data && data.page),
          filters,
        }),
      )
    } else {
      // Only happens if there are no movies added yet
      dispatch(
        moviesActions.getMoviesSuccess({
          movies: [],
          numberOfItems: 0,
          limit,
          page,
          filters,
        }),
      )
    }
  } catch (error) {
    dispatch(
      errorHandlerActions.setError({
        type: 'danger',
        status: error.status,
        message: error.message,
      }),
    )
    dispatch(moviesActions.getMoviesFailure())
  }
}

const getLatestMovies = amount => async dispatch => {
  dispatch(moviesActions.getLatestMovies())

  try {
    const { data } = await moviesService.getLatest(amount)
    dispatch(moviesActions.getLatestMoviesSuccess({ movies: data }))
  } catch (error) {
    dispatch(moviesActions.getLatestMoviesFailure())
  }
}

const createMovie = movie => async dispatch => {
  dispatch(moviesActions.createMovie())

  try {
    await moviesService.create(movie) // will throw error if it fails
    dispatch(moviesActions.createMovieSuccess(movie))
  } catch (error) {
    dispatch(moviesActions.createMovieFailure())
    dispatch(
      errorHandlerActions.setError({
        type: 'danger',
        status: error.status,
        message: error.message,
      }),
    )
  }
}

const updateMovie = (id, newProps) => async dispatch => {
  dispatch(moviesActions.updateMovie())
  try {
    const { data } = await moviesService.update(id, newProps)
    dispatch(moviesActions.updateMovieSuccess(data))
  } catch (error) {
    dispatch(moviesActions.updateMovieFailure())
    dispatch(
      errorHandlerActions.setError({
        type: 'danger',
        status: error.status,
        message: error.message,
      }),
    )
  }
}

const deleteMovie = id => async dispatch => {
  dispatch(moviesActions.deleteMovie())
  try {
    const { data } = await moviesService.deleteById(id)
    dispatch(moviesActions.deleteMovieSuccess(data.id))
    dispatch(
      errorHandlerActions.setError({
        type: 'alert',
        status: 200,
        message: 'Deleted',
      }),
    )
  } catch (error) {
    dispatch(
      errorHandlerActions.setError({
        type: 'danger',
        status: error.status,
        message: error.message,
      }),
    )
    dispatch(moviesActions.deleteMovieFailure())
  }
}

const findMovieByTitle = title => async dispatch => {
  dispatch(moviesActions.findByTitle())
  try {
    const { data } = await moviesService.findByTitle(title)
    dispatch(moviesActions.findByTitleSuccess(data))
  } catch (error) {
    dispatch(
      errorHandlerActions.setError({
        type: 'danger',
        status: error.status,
        message: error.message,
      }),
    )
    dispatch(moviesActions.findByTitleFailure())
  }
}

const filterByRating = rating => async dispatch => {
  dispatch(moviesActions.filterByRating())
  try {
    const { data } = await moviesService.filterByRating(rating)
    dispatch(moviesActions.filterByRatingSuccess(data))
  } catch (error) {
    dispatch(
      errorHandlerActions.setError({
        type: 'danger',
        status: error.status,
        message: error.message,
      }),
    )
    dispatch(moviesActions.filterByRatingFailure())
  }
}

const filterByGenres = genresIds => async dispatch => {
  dispatch(moviesActions.filterByGenres())
  try {
    const { data } = await moviesService.filterByGenres(genresIds)
    dispatch(moviesActions.filterByGenresSuccess(data))
  } catch (error) {
    dispatch(
      errorHandlerActions.setError({
        type: 'danger',
        status: error.status,
        message: error.message,
      }),
    )
    dispatch(moviesActions.filterByGenresFailure())
  }
}

const moviesThunks = {
  getAllMovies,
  getLatestMovies,
  createMovie,
  updateMovie,
  deleteMovie,
  findMovieByTitle,
  filterByRating,
  filterByGenres,
  getMoviesFiltered,
}

export default moviesThunks
