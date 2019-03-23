import genresTypes from './genres.types'

const loadGenresInit = () => ({
  type: genresTypes.LOAD_GENRES_INIT,
})

const loadGenresSuccess = genres => ({
  type: genresTypes.LOAD_GENRES_SUCCESS,
  payload: { genres },
})

const loadGenresFailure = () => ({
  type: genresTypes.LOAD_GENRES_FAILURE,
})

const addToGenreFilter = ({ id, name }) => ({
  type: genresTypes.ADD_TO_GENRE_FILTER,
  payload: { id, name },
})

const removeGenreFromFilter = id => ({
  type: genresTypes.REMOVE_FROM_GENRE_FILTER,
  payload: { id },
})

const genresActions = {
  loadGenresInit,
  loadGenresSuccess,
  loadGenresFailure,
  addToGenreFilter,
  removeGenreFromFilter,
}

export default genresActions
