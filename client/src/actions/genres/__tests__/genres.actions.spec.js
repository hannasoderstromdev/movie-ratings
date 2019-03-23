import genresTypes from '../genres.types'
import genresActions from '../genres.actions'

describe('Actions/Genres', () => {
  describe('loadGenresInit', () => {
    it(`returns ${genresTypes.LOAD_GENRES_INIT}`, () => {
      const action = genresActions.loadGenresInit()

      expect(action).toEqual({
        type: genresTypes.LOAD_GENRES_INIT,
      })
    })
  })
  describe('loadGenresSuccess', () => {
    it(`returns ${genresTypes.LOAD_GENRES_SUCCESS}`, () => {
      const genres = {}
      const action = genresActions.loadGenresSuccess(genres)

      expect(action).toEqual({
        type: genresTypes.LOAD_GENRES_SUCCESS,
        payload: { genres },
      })
    })
  })
  describe('loadGenresFailure', () => {
    it(`returns ${genresTypes.LOAD_GENRES_FAILURE}`, () => {
      const action = genresActions.loadGenresFailure()

      expect(action).toEqual({
        type: genresTypes.LOAD_GENRES_FAILURE,
      })
    })
  })
})
