import {
  SEARCH_FOR_MOVIE_TITLE,
  SEARCH_FOR_MOVIE_TITLE_FAILURE,
  SEARCH_FOR_MOVIE_TITLE_SUCCESS,
} from 'actions/search/search.actions'

const initialState = {
  loading: false,
  movie: {},
  error: null,
}

export default (state = initialState, action) => {
  switch (action.type) {
    case SEARCH_FOR_MOVIE_TITLE:
      return {
        ...initialState,
        loading: true,
      }

    case SEARCH_FOR_MOVIE_TITLE_SUCCESS:
      return {
        ...initialState,
        movie: action.payload.movie,
      }

    case SEARCH_FOR_MOVIE_TITLE_FAILURE:
      return {
        ...initialState,
        error: action.payload.error,
      }

    default:
      return state
  }
}
