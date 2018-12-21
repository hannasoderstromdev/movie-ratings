import moviesService from 'services/movies/movies.service'
import { alertErrorAction } from '../alerts/alerts.actions'

export const GET_ALL_MOVIES = 'GET_ALL_MOVIES'
export const GET_ALL_MOVIES_SUCCESS = 'GET_ALL_MOVIES_SUCCESS'
export const GET_ALL_MOVIES_FAILURE = 'GET_ALL_MOVIES_SUCCESS'

export const CREATE_MOVIE = 'CREATE_MOVIE'
export const CREATE_MOVIE_SUCCESS = 'CREATE_MOVIE_SUCCESS'
export const CREATE_MOVIE_FAILURE = 'CREATE_MOVIE_FAILURE'

const getAllMoviesAction = () => ({
  type: GET_ALL_MOVIES,
})

const getAllMoviesSuccessAction = movies => ({
  type: GET_ALL_MOVIES_SUCCESS,
  payload: { movies },
})

const getAllMoviesFailureAction = error => ({
  type: GET_ALL_MOVIES_FAILURE,
  payload: { error },
})

const createMovieAction = () => ({
  type: CREATE_MOVIE,
})

const createMovieSuccessAction = movie => ({
  type: CREATE_MOVIE_SUCCESS,
  payload: { movie },
})

const createMovieFailureAction = error => ({
  type: CREATE_MOVIE_FAILURE,
  payload: { error },
})

export const getAllMovies = () => async dispatch => {
  dispatch(getAllMoviesAction())

  try {
    const movies = await moviesService.getAll()
    dispatch(getAllMoviesSuccessAction(movies))
  } catch (error) {
    dispatch(getAllMoviesFailureAction(error))
    dispatch(alertErrorAction(error))
  }
}

export const createMovie = movie => async dispatch => {
  dispatch(createMovieAction())

  try {
    const createdMovie = await moviesService.create(movie)
    dispatch(createMovieSuccessAction(createdMovie))
  } catch (error) {
    dispatch(createMovieFailureAction(error))
    dispatch(alertErrorAction(error))
  }
}
