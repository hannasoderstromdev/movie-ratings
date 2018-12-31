import {
  GET_ALL_MOVIES,
  GET_ALL_MOVIES_SUCCESS,
  GET_ALL_MOVIES_FAILURE,
  UPDATE_MOVIE,
  UPDATE_MOVIE_FAILURE,
  UPDATE_MOVIE_SUCCESS,
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
        ...state,
        loading: true,
      }

    case GET_ALL_MOVIES_SUCCESS:
      return {
        ...state,
        error: false,
        loading: false,
        movies: action.payload.movies,
      }

    case GET_ALL_MOVIES_FAILURE:
      return {
        ...state,
        error: true,
        loading: false,
      }

    case UPDATE_MOVIE:
      return {
        ...state,
        error: false,
        loading: true,
      }

    case UPDATE_MOVIE_FAILURE:
      return {
        ...state,
        error: true,
        loading: false,
      }

    case UPDATE_MOVIE_SUCCESS:
      return {
        ...state,
        error: false,
        loading: false,
        movies: state.movies.map(movie => {
          if (movie.id === action.payload.movie.id) {
            return action.payload.movie
          }
          return movie
        }),
      }

    default:
      return state
  }
}
