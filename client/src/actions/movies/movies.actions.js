import moviesTypes from './movies.types'

// getMovies
const getMovies = () => ({
  type: moviesTypes.GET_MOVIES,
})

const getMoviesSuccess = ({
  movies,
  numberOfItems,
  limit,
  page,
  genres,
  rating,
}) => ({
  type: moviesTypes.GET_MOVIES_SUCCESS,
  payload: { movies, numberOfItems, limit, page, genres, rating },
})

const getMoviesFailure = () => ({
  type: moviesTypes.GET_MOVIES_FAILURE,
})

// getLatestMovie
const getLatestMovies = () => ({
  type: moviesTypes.GET_LATEST_MOVIES,
})

const getLatestMoviesSuccess = ({ movies }) => ({
  type: moviesTypes.GET_LATEST_MOVIES_SUCCESS,
  payload: { movies },
})

const getLatestMoviesFailure = () => ({
  type: moviesTypes.GET_LATEST_MOVIES_FAILURE,
})

// createMovie
const createMovie = () => ({
  type: moviesTypes.CREATE_MOVIE,
})

const createMovieSuccess = movie => ({
  type: moviesTypes.CREATE_MOVIE_SUCCESS,
  payload: { movie },
})

const createMovieFailure = () => ({
  type: moviesTypes.CREATE_MOVIE_FAILURE,
})

// updateMovie
const updateMovie = () => ({
  type: moviesTypes.UPDATE_MOVIE,
})

const updateMovieSuccess = movie => ({
  type: moviesTypes.UPDATE_MOVIE_SUCCESS,
  payload: { movie },
})

const updateMovieFailure = () => ({
  type: moviesTypes.UPDATE_MOVIE_FAILURE,
})

// deleteMovie
const deleteMovie = () => ({
  type: moviesTypes.DELETE_MOVIE,
})

const deleteMovieSuccess = id => ({
  type: moviesTypes.DELETE_MOVIE_SUCCESS,
  payload: { id },
})

const deleteMovieFailure = () => ({
  type: moviesTypes.DELETE_MOVIE_FAILURE,
})

// find by title
const findByTitle = () => ({
  type: moviesTypes.FIND_MOVIE_BY_TITLE,
})

const findByTitleSuccess = movie => ({
  type: moviesTypes.FIND_MOVIE_BY_TITLE_SUCCESS,
  payload: { movie },
})

const findByTitleFailure = () => ({
  type: moviesTypes.FIND_MOVIE_BY_TITLE_FAILURE,
})

// toggle search library
const toggleSearchLibrary = () => ({
  type: moviesTypes.TOGGLE_SEARCH_LIBRARY,
})

// filtering
const setFilterGenres = genres => ({
  type: moviesTypes.SET_FILTER_GENRES,
  payload: { genres },
})

const setFilterRating = rating => ({
  type: moviesTypes.SET_FILTER_RATING,
  payload: { rating },
})

const moviesActions = {
  getMovies,
  getMoviesSuccess,
  getMoviesFailure,
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
  findByTitle,
  findByTitleSuccess,
  findByTitleFailure,
  toggleSearchLibrary,
  setFilterGenres,
  setFilterRating,
}

export default moviesActions
