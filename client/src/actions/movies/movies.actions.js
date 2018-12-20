import moviesService from 'services/movies/movies.service'
import { alertErrorAction } from '../alerts/alerts.actions'

export const GET_ALL_MOVIES = 'GET_ALL_MOVIES'
export const GET_ALL_MOVIES_SUCCESS = 'GET_ALL_MOVIES_SUCCESS'
export const GET_ALL_MOVIES_FAILURE = 'GET_ALL_MOVIES_SUCCESS'

const getAllMoviesAction = movies => ({
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
