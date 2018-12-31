import moviesService from 'services/movies/movies.service'
import { setErrorAction } from 'actions/errorHandler/errorHandler.actions'

export const GET_ALL_MOVIES = 'GET_ALL_MOVIES'
export const GET_ALL_MOVIES_SUCCESS = 'GET_ALL_MOVIES_SUCCESS'
export const GET_ALL_MOVIES_FAILURE = 'GET_ALL_MOVIES_FAILURE'

export const CREATE_MOVIE = 'CREATE_MOVIE'
export const CREATE_MOVIE_SUCCESS = 'CREATE_MOVIE_SUCCESS'
export const CREATE_MOVIE_FAILURE = 'CREATE_MOVIE_FAILURE'

export const UPDATE_MOVIE = 'UPDATE_MOVIE'
export const UPDATE_MOVIE_SUCCESS = 'UPDATE_MOVIE_SUCCESS'
export const UPDATE_MOVIE_FAILURE = 'UPDATE_MOVIE_FAILURE'

export const getAllMoviesAction = () => ({
  type: GET_ALL_MOVIES,
})

export const getAllMoviesSuccessAction = ({ movies }) => ({
  type: GET_ALL_MOVIES_SUCCESS,
  payload: { movies },
})

export const getAllMoviesFailureAction = () => ({
  type: GET_ALL_MOVIES_FAILURE,
})

export const createMovieAction = () => ({
  type: CREATE_MOVIE,
})

export const createMovieSuccessAction = movie => ({
  type: CREATE_MOVIE_SUCCESS,
  payload: { movie },
})

export const createMovieFailureAction = () => ({
  type: CREATE_MOVIE_FAILURE,
})

export const updateMovieAction = () => ({
  type: UPDATE_MOVIE,
})

export const updateMovieSuccessAction = movie => ({
  type: UPDATE_MOVIE_SUCCESS,
  payload: { movie },
})

export const updateMovieFailureAction = () => ({
  type: UPDATE_MOVIE_FAILURE,
})

export const getAllMovies = () => async dispatch => {
  dispatch(getAllMoviesAction())

  try {
    const response = await moviesService.getAll()
    dispatch(getAllMoviesSuccessAction({ movies: response.data }))
  } catch (error) {
    console.log('error', error)
    dispatch(
      setErrorAction({
        type: 'danger',
        status: error.status,
        message: error.message,
      }),
    )
    dispatch(getAllMoviesFailureAction(true))
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
  // update movie
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
