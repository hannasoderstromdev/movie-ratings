import {
  GET_ALL_MOVIES,
  GET_ALL_MOVIES_SUCCESS,
  GET_ALL_MOVIES_FAILURE,
} from 'actions/movies/movies.actions'

const initialState = {
  loading: false,
  movies: [],
  error: null,
}

export default (state = initialState, action) => {
  switch (action.type) {
    case GET_ALL_MOVIES:
      return {
        ...initialState,
        loading: true,
      }

    case GET_ALL_MOVIES_SUCCESS:
      return {
        ...initialState,
        movies: action.payload.movies,
      }

    case GET_ALL_MOVIES_FAILURE:
      return {
        ...initialState,
        error: action.payload.error,
      }

    default:
      return state
  }
}
