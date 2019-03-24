import moviesActions from './movies.actions'
import errorHandlerActions from 'actions/errorHandler/errorHandler.actions'

import moviesService from 'services/movies/movies.service'

const getMovies = ({ limit, page, genres, rating }) => async dispatch => {
  dispatch(moviesActions.getMovies())

  try {
    const { data } = await moviesService.getAll({ limit, page, genres, rating })
    if (data) {
      dispatch(
        moviesActions.getMoviesSuccess({
          movies: data && data.movies,
          numberOfItems: parseInt(data && data.numberOfItems),
          limit: parseInt(data && data.limit),
          page: parseInt(data && data.page),
          genres,
          rating,
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
          genres,
          rating,
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

const moviesThunks = {
  getMovies,
  getLatestMovies,
  findMovieByTitle,
  createMovie,
  updateMovie,
  deleteMovie,
}

export default moviesThunks
