import {
  SET_ERROR,
  CLEAR_ERROR,
  setError,
  clearError,
} from '../errorHandler.actions'

describe('Actions/ErrorHandler', () => {
  describe('setError', () => {
    it(`returns ${SET_ERROR} with correct payload`, () => {
      const errorType = 403
      const errorMessage = 'JWT Expired'

      expect(setError({ errorType, errorMessage })).toEqual({
        type: SET_ERROR,
        payload: { errorType, errorMessage },
      })
    })
  })

  describe('clearError', () => {
    it(`returns ${CLEAR_ERROR}`, () => {
      expect(clearError()).toEqual({
        type: CLEAR_ERROR,
      })
    })
  })
})
