import errorHandlerTypes from '../errorHandler.types'
import errorHandlerActions from '../errorHandler.actions'

describe('Actions/ErrorHandler', () => {
  describe('setError', () => {
    it(`returns ${errorHandlerTypes.SET_ERROR} with correct payload`, () => {
      const status = 403
      const type = 'danger'
      const message = 'JWT Expired'

      expect(errorHandlerActions.setError({ status, type, message })).toEqual({
        type: errorHandlerTypes.SET_ERROR,
        payload: { status, type, message },
      })
    })
  })

  describe('clearError', () => {
    it(`returns ${errorHandlerTypes.CLEAR_ERROR}`, () => {
      expect(errorHandlerActions.clearError()).toEqual({
        type: errorHandlerTypes.CLEAR_ERROR,
      })
    })
  })
})
