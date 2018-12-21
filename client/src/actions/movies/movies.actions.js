import moviesService from 'services/movies/movies.service'
import { alertErrorAction } from '../alerts/alerts.actions'

export const GET_ALL_MOVIES = 'GET_ALL_MOVIES'
export const GET_ALL_MOVIES_SUCCESS = 'GET_ALL_MOVIES_SUCCESS'
export const GET_ALL_MOVIES_FAILURE = 'GET_ALL_MOVIES_FAILURE'

export const CREATE_MOVIE = 'CREATE_MOVIE'
export const CREATE_MOVIE_SUCCESS = 'CREATE_MOVIE_SUCCESS'
export const CREATE_MOVIE_FAILURE = 'CREATE_MOVIE_FAILURE'

export const getAllMoviesAction = () => ({
  type: GET_ALL_MOVIES,
})

export const getAllMoviesSuccessAction = movies => ({
  type: GET_ALL_MOVIES_SUCCESS,
  payload: { movies },
})

export const getAllMoviesFailureAction = error => ({
  type: GET_ALL_MOVIES_FAILURE,
  payload: { error },
})

export const createMovieAction = () => ({
  type: CREATE_MOVIE,
})

export const createMovieSuccessAction = movie => ({
  type: CREATE_MOVIE_SUCCESS,
  payload: { movie },
})

export const createMovieFailureAction = error => ({
  type: CREATE_MOVIE_FAILURE,
  payload: { error },
})

export const getAllMovies = () => async dispatch => {
  dispatch(getAllMoviesAction())

  try {
    const movies = await moviesService.getAll()
    dispatch(getAllMoviesSuccessAction(movies))
  } catch (error) {
    dispatch(getAllMoviesFailureAction(error.message))
    dispatch(alertErrorAction(error.message))
  }
}

export const createMovie = movie => async dispatch => {
  dispatch(createMovieAction())

  try {
    const createdMovie = await moviesService.create(movie)
    dispatch(createMovieSuccessAction(createdMovie))
  } catch (error) {
    dispatch(createMovieFailureAction(error.message))
    dispatch(alertErrorAction(error.message))
  }
}
