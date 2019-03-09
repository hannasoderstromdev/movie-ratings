import filterByGenreTypes from './filterByGenre.types'

const selectGenre = ({ genre }) => ({
  type: filterByGenreTypes.TOGGLE_GENRE_SELECTION,
  payload: { genre },
})

const loadGenres = ({ genres }) => ({
  type: filterByGenreTypes.LOAD_GENRES,
  payload: { genres },
})

const filterByGenreActions = {
  selectGenre,
  loadGenres,
}

export default filterByGenreActions
