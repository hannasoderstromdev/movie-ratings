import genresTypes from 'actions/genres/genres.types'

import { removeObjectChildProperty } from 'utils/Object'

const initialState = {
  loading: false,
  genres: {},
  error: false,
  filter: {},
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

    case genresTypes.ADD_TO_GENRE_FILTER:
      return {
        ...state,
        filter: {
          ...state.filter,
          [action.payload.id]: { name: action.payload.name },
        },
      }

    case genresTypes.REMOVE_FROM_GENRE_FILTER:
      return {
        ...state,
        ...removeObjectChildProperty(state, 'filter', action.payload.id),
      }

    default:
      return state
  }
}
