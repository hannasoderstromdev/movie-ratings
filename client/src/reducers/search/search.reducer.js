import searchTypes from 'actions/search/search.types'

const initialState = {
  loading: false,
  movie: null,
  error: false,
}

export default (state = initialState, action) => {
  switch (action.type) {
    case searchTypes.SEARCH_FOR_MOVIE_TITLE:
      return {
        ...initialState,
        loading: true,
      }

    case searchTypes.SEARCH_FOR_MOVIE_TITLE_SUCCESS:
      return {
        ...initialState,
        movie: { ...action.payload.movie, inLibrary: action.payload.inLibrary },
      }

    case searchTypes.SEARCH_FOR_MOVIE_TITLE_FAILURE:
      return {
        ...initialState,
        error: true,
      }

    case searchTypes.SEARCH_FOR_MOVIE_ID:
      return {
        ...initialState,
        loading: true,
      }

    case searchTypes.SEARCH_FOR_MOVIE_ID_SUCCESS:
      return {
        ...initialState,
        movie: { ...action.payload.movie, inLibrary: action.payload.inLibrary },
      }

    case searchTypes.SEARCH_FOR_MOVIE_ID_FAILURE:
      return {
        ...initialState,
        error: true,
      }

    default:
      return state
  }
}
