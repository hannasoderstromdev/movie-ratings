import moviesTypes from 'actions/movies/movies.types'

const initialState = {
  loading: false,
  movies: [],
  error: null,
}

export default (state = initialState, action) => {
  switch (action.type) {
    case moviesTypes.GET_ALL_MOVIES:
      return {
        ...state,
        movies: [],
        loading: true,
        error: false,
      }

    case moviesTypes.GET_ALL_MOVIES_SUCCESS:
      return {
        ...state,
        error: false,
        loading: false,
        movies: action.payload.movies,
      }

    case moviesTypes.GET_ALL_MOVIES_FAILURE:
      return {
        ...state,
        error: true,
        loading: false,
      }

    case moviesTypes.GET_LATEST_MOVIES:
      return {
        ...state,
        error: false,
        loading: true,
      }

    case moviesTypes.GET_LATEST_MOVIES_SUCCESS:
      return {
        ...state,
        error: false,
        loading: false,
        movies: action.payload.movies,
      }

    case moviesTypes.GET_LATEST_MOVIES_FAILURE:
      return {
        ...state,
        error: true,
        loading: false,
      }

    case moviesTypes.CREATE_MOVIE:
      return {
        ...state,
        error: false,
        loading: true,
      }

    case moviesTypes.CREATE_MOVIE_SUCCESS:
      return {
        ...state,
        error: false,
        loading: false,
        movies: [...state.movies, action.payload.movie],
      }

    case moviesTypes.CREATE_MOVIE_FAILURE:
      return {
        ...state,
        error: true,
        loading: false,
      }

    case moviesTypes.UPDATE_MOVIE:
      return {
        ...state,
        error: false,
        loading: true,
      }

    case moviesTypes.UPDATE_MOVIE_FAILURE:
      return {
        ...state,
        error: true,
        loading: false,
      }

    case moviesTypes.UPDATE_MOVIE_SUCCESS:
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

    case moviesTypes.DELETE_MOVIE:
      return {
        ...state,
        error: false,
        loading: true,
      }

    case moviesTypes.DELETE_MOVIE_FAILURE:
      return {
        ...state,
        error: true,
        loading: false,
      }

    case moviesTypes.DELETE_MOVIE_SUCCESS:
      return {
        ...state,
        error: false,
        loading: false,
        movies: state.movies.filter(movie => movie.id !== action.payload.id),
      }

    case moviesTypes.FIND_MOVIE_BY_TITLE:
      return {
        ...state,
        error: false,
        loading: true,
      }

    case moviesTypes.FIND_MOVIE_BY_TITLE_FAILURE:
      return {
        ...state,
        error: true,
        loading: false,
      }

    case moviesTypes.FIND_MOVIE_BY_TITLE_SUCCESS:
      return {
        ...state,
        error: false,
        loading: false,
        movies: [action.payload.movie],
      }

    case moviesTypes.FILTER_BY_RATING:
      return {
        ...state,
        error: false,
        loading: true,
      }

    case moviesTypes.FILTER_BY_RATING_FAILURE:
      return {
        ...state,
        error: true,
        loading: false,
      }

    case moviesTypes.FILTER_BY_RATING_SUCCESS:
      return {
        ...state,
        error: false,
        loading: false,
        movies: action.payload.movies,
      }

    default:
      return state
  }
}
