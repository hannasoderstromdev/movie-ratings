import genresTypes from 'actions/genres/genres.types'

const initialState = {}

export default (state = initialState, action) => {
  switch (action.type) {
    case genresTypes.LOAD_GENRES:
      return action.payload.genres

    default:
      return state
  }
}
