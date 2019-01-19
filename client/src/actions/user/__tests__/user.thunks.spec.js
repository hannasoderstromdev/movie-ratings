import configureStore from 'redux-mock-store'
import thunk from 'redux-thunk'

import userTypes from '../user.types'
import userThunks from '../user.thunks'

const middlewares = [thunk]
const mockStore = configureStore(middlewares)

describe('Actions/User/Thunks', () => {
  let initialState
  let store

  beforeEach(() => {
    initialState = {}
    store = mockStore(initialState)
  })

  xdescribe('login', () => {
    // TODO: mock fetch-request
    it('dispatches the correct actions failed network request', async () => {
      await store.dispatch(userThunks.login('email@test.com', 'password123'))
      const actions = store.getActions()
      const expected = [
        { type: userTypes.LOGIN_REQUEST },
        {
          payload: { error: 'TypeError: Network request failed' },
          type: userTypes.LOGIN_FAILURE,
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
    it(`dispatches ${userTypes.LOGOUT}`, async () => {
      await store.dispatch(userThunks.logout('email@test.com', 'password123'))
      const actions = store.getActions()
      const expected = [{ type: userTypes.LOGOUT }]

      expect(actions).toEqual(expected)
    })
  })
})
