import errorHandlerTypes from 'actions/errorHandler/errorHandler.types'
import reducer from '../errorHandler.reducer'

describe('Reducers/ErrorHandler', () => {
  const initialState = {
    error: false,
    type: null,
    message: '',
    status: 0,
  }

  it(`handles ${errorHandlerTypes.SET_ERROR}`, () => {
    const type = 'danger'
    const message = 'Unauthorized'
    const status = 403
    const expectedState = {
      error: true,
      type,
      message,
      status,
    }
    const action = {
      type: errorHandlerTypes.SET_ERROR,
      payload: { type, message, status },
    }
    expect(reducer(initialState, action)).toEqual(expectedState)
  })

  it(`handles ${errorHandlerTypes.CLEAR_ERROR}`, () => {
    const state = {
      error: true,
      type: 'danger',
      message: 'Unauthorized',
      status: 403,
    }
    const action = {
      type: errorHandlerTypes.CLEAR_ERROR,
    }
    expect(reducer(state, action)).toEqual(initialState)
  })
})
