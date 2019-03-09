import genresTypes from 'actions/genres/genres.types'

const initialState = {
  loading: false,
  genres: [],
  error: false,
}

export default (state = initialState, action) => {
  switch (action.type) {
    case genresTypes.LOAD_GENRES_INIT:
      return {
        ...state,
        loading: true,
      }

    case genresTypes.LOAD_GENRES_SUCCESS:
      return {
        ...state,
        loading: false,
        genres: action.payload.genres,
        error: false,
      }

    case genresTypes.LOAD_GENRES_FAILURE:
      return {
        ...state,
        loading: false,
        error: true,
      }

    default:
      return state
  }
}
