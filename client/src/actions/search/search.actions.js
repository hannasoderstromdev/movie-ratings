import searchTypes from './search.types'

const searchByTitle = () => ({
  type: searchTypes.SEARCH_FOR_MOVIE_TITLE,
})

const searchByTitleSuccess = (movie, inLibrary) => ({
  type: searchTypes.SEARCH_FOR_MOVIE_TITLE_SUCCESS,
  payload: { movie, inLibrary },
})

const searchByTitleFailure = () => ({
  type: searchTypes.SEARCH_FOR_MOVIE_TITLE_FAILURE,
})

const searchById = () => ({
  type: searchTypes.SEARCH_FOR_MOVIE_ID,
})

const searchByIdSuccess = (movie, inLibrary) => ({
  type: searchTypes.SEARCH_FOR_MOVIE_ID_SUCCESS,
  payload: { movie, inLibrary },
})

const searchByIdFailure = () => ({
  type: searchTypes.SEARCH_FOR_MOVIE_ID_FAILURE,
})

const searchActions = {
  searchByTitle,
  searchByTitleSuccess,
  searchByTitleFailure,
  searchById,
  searchByIdSuccess,
  searchByIdFailure,
}

export default searchActions
