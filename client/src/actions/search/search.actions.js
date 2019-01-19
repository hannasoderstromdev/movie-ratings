import searchTypes from './search.types'

const searchForMovieTitle = () => ({
  type: searchTypes.SEARCH_FOR_MOVIE_TITLE,
})

const searchForMovieTitleSuccess = (movie, inLibrary) => ({
  type: searchTypes.SEARCH_FOR_MOVIE_TITLE_SUCCESS,
  payload: { movie, inLibrary },
})

const searchForMovieTitleFailure = () => ({
  type: searchTypes.SEARCH_FOR_MOVIE_TITLE_FAILURE,
})

const searchActions = {
  searchForMovieTitle,
  searchForMovieTitleSuccess,
  searchForMovieTitleFailure,
}

export default searchActions
