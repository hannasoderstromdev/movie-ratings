import {
  getAllMoviesAction,
  getAllMoviesSuccessAction,
  getAllMoviesFailureAction,
  createMovieAction,
  createMovieSuccessAction,
  createMovieFailureAction,
  updateMovieAction,
  updateMovieSuccessAction,
  updateMovieFailureAction,
} from './movies.actions'
import { setErrorAction } from 'actions/errorHandler/errorHandler.actions'

import moviesService from 'services/movies/movies.service'

export const getAllMovies = () => async dispatch => {
  dispatch(getAllMoviesAction())

  try {
    const response = await moviesService.getAll()
    dispatch(getAllMoviesSuccessAction({ movies: response.data }))
  } catch (error) {
    dispatch(
      setErrorAction({
        type: 'danger',
        status: error.status,
        message: error.message,
      }),
    )
    dispatch(getAllMoviesFailureAction())
  }
}

export const createMovie = movie => async dispatch => {
  dispatch(createMovieAction())

  try {
    const createdMovie = await moviesService.create(movie)
    dispatch(createMovieSuccessAction(createdMovie))
  } catch (error) {
    dispatch(createMovieFailureAction(true))
    dispatch(
      setErrorAction({
        type: 'danger',
        status: error.status,
        message: error.message,
      }),
    )
  }
}

export const updateMovie = (id, newProps) => async dispatch => {
  dispatch(updateMovieAction())
  try {
    const { data } = await moviesService.update(id, newProps)
    dispatch(updateMovieSuccessAction(data))
  } catch (error) {
    dispatch(
      setErrorAction({
        type: 'danger',
        status: error.status,
        message: error.message,
      }),
    )
  }
}

export const deleteMovie = id => async dispatch => {
  try {
    const { data } = await moviesService.deleteById(id)
    dispatch(updateMovieSuccessAction(data))
  } catch (error) {
    dispatch(
      setErrorAction({
        type: 'danger',
        status: error.status,
        message: error.message,
      }),
    )
    dispatch(updateMovieFailureAction())
  }
}

// TODO:
export const findMovieByTitle = title => async dispatch => {
  try {
    // find movie by title
  } catch (error) {
    dispatch(
      setErrorAction({
        type: 'danger',
        status: error.status,
        message: error.message,
      }),
    )
  }
}
