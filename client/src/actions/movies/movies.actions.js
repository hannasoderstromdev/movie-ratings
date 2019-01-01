export const GET_ALL_MOVIES = 'GET_ALL_MOVIES'
export const GET_ALL_MOVIES_SUCCESS = 'GET_ALL_MOVIES_SUCCESS'
export const GET_ALL_MOVIES_FAILURE = 'GET_ALL_MOVIES_FAILURE'

export const CREATE_MOVIE = 'CREATE_MOVIE'
export const CREATE_MOVIE_SUCCESS = 'CREATE_MOVIE_SUCCESS'
export const CREATE_MOVIE_FAILURE = 'CREATE_MOVIE_FAILURE'

export const UPDATE_MOVIE = 'UPDATE_MOVIE'
export const UPDATE_MOVIE_SUCCESS = 'UPDATE_MOVIE_SUCCESS'
export const UPDATE_MOVIE_FAILURE = 'UPDATE_MOVIE_FAILURE'

export const DELETE_MOVIE = 'DELETE_MOVIE'
export const DELETE_MOVIE_SUCCESS = 'DELETE_MOVIE_SUCCESS'
export const DELETE_MOVIE_FAILURE = 'DELETE_MOVIE_FAILURE'

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

export const deleteMovieAction = () => ({
  type: DELETE_MOVIE,
})

export const deleteMovieSuccessAction = id => ({
  type: DELETE_MOVIE_SUCCESS,
  payload: { id },
})

export const deleteMovieFailureAction = () => ({
  type: DELETE_MOVIE_FAILURE,
})
