import searchActions from './search.actions'
import searchService from 'services/search/search.service'
import errorHandlerActions from 'actions/errorHandler/errorHandler.actions'

const searchOMDB = movieTitle => async dispatch => {
  dispatch(searchActions.searchForMovieTitle())

  try {
    const result = await searchService.search(movieTitle)
    dispatch(
      searchActions.searchForMovieTitleSuccess(result.data, result.inLibrary),
    )
  } catch (error) {
    dispatch(searchActions.searchForMovieTitleFailure())
    dispatch(
      errorHandlerActions.setError({
        type: 'danger',
        status: error.status,
        message: error.message,
      }),
    )
  }
}

const searchThunks = {
  searchOMDB,
}

export default searchThunks
