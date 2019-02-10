import searchActions from './search.actions'
import searchService from 'services/search/search.service'
import errorHandlerActions from 'actions/errorHandler/errorHandler.actions'

const searchByTitle = movieTitle => async dispatch => {
  dispatch(searchActions.searchByTitle())

  try {
    const result = await searchService.searchByTitle(movieTitle)
    dispatch(searchActions.searchByTitleSuccess(result.data, result.inLibrary))
  } catch (error) {
    dispatch(searchActions.searchByTitleFailure())
    dispatch(
      errorHandlerActions.setError({
        type: 'danger',
        status: error.status,
        message: error.message,
      }),
    )
  }
}

const searchById = imdbId => async dispatch => {
  dispatch(searchActions.searchById())

  try {
    const result = await searchService.searchById(imdbId)
    dispatch(searchActions.searchByIdSuccess(result.data, result.inLibrary))
  } catch (error) {
    dispatch(searchActions.searchByIdFailure())
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
  searchByTitle,
  searchById,
}

export default searchThunks
