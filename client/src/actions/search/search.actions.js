import searchService from 'services/search/search.service'
import { alertErrorAction } from '../alerts/alerts.actions'

export const SEARCH_FOR_MOVIE_TITLE = 'SEARCH_FOR_MOVIE_TITLE'
export const SEARCH_FOR_MOVIE_TITLE_SUCCESS = 'SEARCH_FOR_MOVIE_TITLE_SUCCESS'
export const SEARCH_FOR_MOVIE_TITLE_FAILURE = 'SEARCH_FOR_MOVIE_TITLE_FAILURE'

const searchForMovieTitleAction = () => ({
  type: SEARCH_FOR_MOVIE_TITLE,
})

const searchForMovieTitleSuccessAction = movie => ({
  type: SEARCH_FOR_MOVIE_TITLE_SUCCESS,
  payload: { movie },
})

const searchForMovieTitleFailureAction = error => ({
  type: SEARCH_FOR_MOVIE_TITLE_FAILURE,
  payload: { error },
})

export const searchOMDB = movieTitle => async dispatch => {
  dispatch(searchForMovieTitleAction())

  try {
    const result = await searchService.search(movieTitle)

    dispatch(searchForMovieTitleSuccessAction(result.data))
  } catch (error) {
    console.log('error', error.message)
    dispatch(searchForMovieTitleFailureAction(error))
    dispatch(alertErrorAction(error.message))
  }
}
