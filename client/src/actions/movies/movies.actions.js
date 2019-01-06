// getAllMovies
const getAllMovies = () => ({
  type: GET_ALL_MOVIES,
})

const getAllMoviesSuccess = ({ movies }) => ({
  type: GET_ALL_MOVIES_SUCCESS,
  payload: { movies },
})

const getAllMoviesFailure = () => ({
  type: GET_ALL_MOVIES_FAILURE,
})

// getLatestMovie
const getLatestMovies = () => ({
  type: GET_LATEST_MOVIES,
})

const getLatestMoviesSuccess = ({ movies }) => ({
  type: GET_LATEST_MOVIES_SUCCESS,
  payload: { movies },
})

const getLatestMoviesFailure = () => ({
  type: GET_LATEST_MOVIES_FAILURE,
})

// createMovie
const createMovie = () => ({
  type: CREATE_MOVIE,
})

const createMovieSuccess = movie => ({
  type: CREATE_MOVIE_SUCCESS,
  payload: { movie },
})

const createMovieFailure = () => ({
  type: CREATE_MOVIE_FAILURE,
})

// updateMovie
const updateMovie = () => ({
  type: UPDATE_MOVIE,
})

const updateMovieSuccess = movie => ({
  type: UPDATE_MOVIE_SUCCESS,
  payload: { movie },
})

const updateMovieFailure = () => ({
  type: UPDATE_MOVIE_FAILURE,
})

// deleteMovie
const deleteMovie = () => ({
  type: DELETE_MOVIE,
})

const deleteMovieSuccess = id => ({
  type: DELETE_MOVIE_SUCCESS,
  payload: { id },
})

const deleteMovieFailure = () => ({
  type: DELETE_MOVIE_FAILURE,
})

const moviesActions = {
  getAllMovies,
  getAllMoviesSuccess,
  getAllMoviesFailure,
  getLatestMovies,
  getLatestMoviesSuccess,
  getLatestMoviesFailure,
  createMovie,
  createMovieSuccess,
  createMovieFailure,
  updateMovie,
  updateMovieSuccess,
  updateMovieFailure,
  deleteMovie,
  deleteMovieSuccess,
  deleteMovieFailure,
}

export default moviesActions
