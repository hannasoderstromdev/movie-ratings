import moviesActions from './movies.actions'
import errorHandlerActions from 'actions/errorHandler/errorHandler.actions'

import moviesService from 'services/movies/movies.service'

const getAllMovies = () => async dispatch => {
  dispatch(moviesActions.getAllMovies())

  try {
    const response = await moviesService.getAll()
    dispatch(moviesActions.getAllMoviesSuccess({ movies: response.data }))
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

// TODO:
const findMovieByTitle = title => async dispatch => {
  dispatch(moviesActions.findByTitle())
  try {
    // find movie by title
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
  getAllMovies,
  getLatestMovies,
  createMovie,
  updateMovie,
  deleteMovie,
  findMovieByTitle,
}

export default moviesThunks
