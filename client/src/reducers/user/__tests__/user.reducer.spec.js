import {
  LOGIN_REQUEST,
  LOGIN_SUCCESS,
  LOGIN_FAILURE,
  LOGOUT,
} from 'actions/user/user.actions'

import reducer from '../user.reducer'

describe('Reducers/User', () => {
  it(`handles ${LOGIN_REQUEST}`, () => {
    const action = {
      type: LOGIN_REQUEST,
    }
    const expectedState = {
      error: null,
      loggedIn: false,
      loggingIn: true,
      profile: null,
    }
    expect(reducer({}, action)).toEqual(expectedState)
  })

  it(`handles ${LOGIN_SUCCESS}`, () => {
    const action = {
      type: LOGIN_SUCCESS,
      payload: { user: {} },
    }
    const expectedState = {
      error: null,
      loggedIn: true,
      loggingIn: false,
      profile: {},
    }
    expect(reducer({}, action)).toEqual(expectedState)
  })

  it(`handles ${LOGIN_FAILURE}`, () => {
    const action = {
      type: LOGIN_FAILURE,
      payload: { error: 'Failed' },
    }
    const expectedState = {
      error: 'Failed',
      loggedIn: false,
      loggingIn: false,
      profile: null,
    }
    expect(reducer({}, action)).toEqual(expectedState)
  })

  it(`handles ${LOGOUT}`, () => {
    const action = {
      type: LOGOUT,
    }
    const expectedState = {
      error: null,
      loggedIn: false,
      loggingIn: false,
      profile: null,
    }
    expect(reducer({}, action)).toEqual(expectedState)
  })
})
