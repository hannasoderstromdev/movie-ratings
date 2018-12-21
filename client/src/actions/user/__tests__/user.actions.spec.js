import configureStore from 'redux-mock-store'
import thunk from 'redux-thunk'

import {
  LOGIN_REQUEST,
  LOGIN_SUCCESS,
  LOGIN_FAILURE,
  LOGOUT,
  loginRequestAction,
  loginSuccessAction,
  loginFailureAction,
  logoutUserAction,
  login,
  logout,
} from '../user.actions'

const middlewares = [thunk]
const mockStore = configureStore(middlewares)

describe('Actions/User', () => {
  describe('loginRequestAction', () => {
    it(`returns ${LOGIN_REQUEST}`, () => {
      const action = loginRequestAction()

      expect(action).toEqual({
        type: LOGIN_REQUEST,
      })
    })
  })

  describe('loginSuccessAction', () => {
    it(`returns ${LOGIN_SUCCESS} and correct payload`, () => {
      const user = {}
      const action = loginSuccessAction(user)

      expect(action).toEqual({ payload: { user: {} }, type: 'LOGIN_SUCCESS' })
    })
  })

  describe('loginFailureAction', () => {
    it(`returns ${LOGIN_FAILURE} and correct payload`, () => {
      const error = 'Login failed'
      const action = loginFailureAction(error)

      expect(action).toEqual({
        payload: { error: 'Login failed' },
        type: 'LOGIN_FAILURE',
      })
    })
  })

  describe('logoutUserAction', () => {
    it(`returns ${LOGOUT}`, () => {
      const action = logoutUserAction()

      expect(action).toEqual({
        type: 'LOGOUT',
      })
    })
  })

  describe('Thunks', () => {
    let initialState
    let store

    beforeEach(() => {
      initialState = {}
      store = mockStore(initialState)
    })

    describe('login', () => {
      it('dispatches the correct actions failed network request', async () => {
        await store.dispatch(login('email@test.com', 'password123'))
        const actions = store.getActions()
        const expected = [
          { type: 'LOGIN_REQUEST' },
          {
            payload: { error: 'TypeError: Network request failed' },
            type: 'LOGIN_FAILURE',
          },
          {
            payload: { message: 'TypeError: Network request failed' },
            type: 'ALERT_ERROR',
          },
        ]

        expect(actions).toEqual(expected)
      })
    })

    describe('logout', () => {
      it(`dispatches ${LOGOUT}`, async () => {
        await store.dispatch(logout('email@test.com', 'password123'))
        const actions = store.getActions()
        const expected = [{ type: 'LOGOUT' }]

        expect(actions).toEqual(expected)
      })
    })
  })
})
