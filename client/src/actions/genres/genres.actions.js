import genresTypes from './genres.types'

const selectGenre = ({ genre }) => ({
  type: genresTypes.TOGGLE_GENRE_SELECTION,
  payload: { genre },
})

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

const genresActions = {
  selectGenre,
  loadGenresInit,
  loadGenresSuccess,
  loadGenresFailure,
}

export default genresActions
