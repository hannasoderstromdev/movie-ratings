import userTypes from 'actions/user/user.types'

import reducer from '../user.reducer'

describe('Reducers/User', () => {
  it(`handles ${userTypes.LOGIN_REQUEST}`, () => {
    const action = {
      type: userTypes.LOGIN_REQUEST,
    }
    const expectedState = {
      error: false,
      loggedIn: false,
      loggingIn: true,
      profile: null,
    }
    expect(reducer({}, action)).toEqual(expectedState)
  })

  it(`handles ${userTypes.LOGIN_SUCCESS}`, () => {
    const action = {
      type: userTypes.LOGIN_SUCCESS,
      payload: { user: {} },
    }
    const expectedState = {
      error: false,
      loggedIn: true,
      loggingIn: false,
      profile: {},
    }
    expect(reducer({}, action)).toEqual(expectedState)
  })

  it(`handles ${userTypes.LOGIN_FAILURE}`, () => {
    const action = {
      type: userTypes.LOGIN_FAILURE,
    }
    const expectedState = {
      error: true,
      loggedIn: false,
      loggingIn: false,
      profile: null,
    }
    expect(reducer({}, action)).toEqual(expectedState)
  })

  it(`handles ${userTypes.LOGOUT}`, () => {
    const action = {
      type: userTypes.LOGOUT,
    }
    const expectedState = {
      error: false,
      loggedIn: false,
      loggingIn: false,
      profile: null,
    }
    expect(reducer({}, action)).toEqual(expectedState)
  })
})
