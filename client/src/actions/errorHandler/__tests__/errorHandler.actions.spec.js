import {
  SET_ERROR,
  CLEAR_ERROR,
  setErrorAction,
  clearErrorAction,
} from '../errorHandler.actions'

describe('Actions/ErrorHandler', () => {
  describe('setErrorAction', () => {
    it(`returns ${SET_ERROR} with correct payload`, () => {
      const status = 403
      const type = 'danger'
      const message = 'JWT Expired'

      expect(setErrorAction({ status, type, message })).toEqual({
        type: SET_ERROR,
        payload: { status, type, message },
      })
    })
  })

  describe('clearErrorAction', () => {
    it(`returns ${CLEAR_ERROR}`, () => {
      expect(clearErrorAction()).toEqual({
        type: CLEAR_ERROR,
      })
    })
  })
})
