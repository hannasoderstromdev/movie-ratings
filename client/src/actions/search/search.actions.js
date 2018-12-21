import searchService from 'services/search/search.service'
import { alertErrorAction } from '../alerts/alerts.actions'

export const SEARCH_FOR_MOVIE_TITLE = 'SEARCH_FOR_MOVIE_TITLE'
export const SEARCH_FOR_MOVIE_TITLE_SUCCESS = 'SEARCH_FOR_MOVIE_TITLE_SUCCESS'
export const SEARCH_FOR_MOVIE_TITLE_FAILURE = 'SEARCH_FOR_MOVIE_TITLE_FAILURE'

export const searchForMovieTitleAction = () => ({
  type: SEARCH_FOR_MOVIE_TITLE,
})

export const searchForMovieTitleSuccessAction = movie => ({
  type: SEARCH_FOR_MOVIE_TITLE_SUCCESS,
  payload: { movie },
})

export const searchForMovieTitleFailureAction = error => ({
  type: SEARCH_FOR_MOVIE_TITLE_FAILURE,
  payload: { error },
})

export const searchOMDB = movieTitle => async dispatch => {
  dispatch(searchForMovieTitleAction())

  try {
    const result = await searchService.search(movieTitle)

    dispatch(searchForMovieTitleSuccessAction(result.data))
  } catch (error) {
    dispatch(searchForMovieTitleFailureAction(error.message))
    dispatch(alertErrorAction(error.message))
  }
}
