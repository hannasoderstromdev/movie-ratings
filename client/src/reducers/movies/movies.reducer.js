import moviesTypes from 'actions/movies/movies.types'

const initialState = {
  loading: false,
  movies: [],
  error: null,
  numberOfItems: 0,
  limit: 0,
  page: 1,
  showSearchLibrary: false,
  genres: [],
  rating: 0,
  selectedMovieId: null,
}

export default (state = initialState, action) => {
  switch (action.type) {
    case moviesTypes.GET_MOVIES:
      return {
        ...state,
        movies: [],
        loading: true,
        error: false,
      }

    case moviesTypes.GET_MOVIES_SUCCESS:
      return {
        ...state,
        error: false,
        loading: false,
        movies: action.payload.movies,
        numberOfItems: action.payload.numberOfItems,
        limit: action.payload.limit,
        page: action.payload.page,
        genres: action.payload.genres || [],
        rating: action.payload.rating || 0,
      }

    case moviesTypes.GET_MOVIES_FAILURE:
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
        numberOfItems: action.payload.movies.length,
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
        selectedMovieId: null,
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
        movies: action.payload.movie,
      }

    case moviesTypes.TOGGLE_SEARCH_LIBRARY:
      return {
        ...state,
        showSearchLibrary: !state.showSearchLibrary,
      }

    // TODO: remove set filters if not used
    case moviesTypes.SET_FILTER_GENRES:
      return {
        ...state,
        genres: action.payload.genres,
      }

    case moviesTypes.SET_FILTER_RATING:
      return {
        ...state,
        rating: action.payload.rating,
      }

    case moviesTypes.SET_SELECTED_MOVIE:
      return {
        ...state,
        selectedMovieId: action.payload.movieId,
      }

    case moviesTypes.CLEAR_SELECTED_MOVIE:
      return {
        ...state,
        selectedMovieId: null,
      }

    default:
      return state
  }
}
