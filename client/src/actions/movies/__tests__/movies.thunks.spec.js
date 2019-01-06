import configureStore from 'redux-mock-store'
import thunk from 'redux-thunk'

import moviesThunks from '../movies.thunks'

const middlewares = [thunk]
const mockStore = configureStore(middlewares)

describe('Actions/Movies/Thunks', () => {
  let initialState
  let store

  beforeEach(() => {
    initialState = {}
    store = mockStore(initialState)
  })

  // TODO: mock fetch
  xdescribe('getAllMovies', () => {
    it('dispatches the correct actions', async () => {
      await store.dispatch(moviesThunks.getAllMovies())
      const actions = store.getActions()
      const expected = [
        { type: 'GET_ALL_MOVIES' },
        {
          payload: { error: 'Network request failed' },
          type: 'GET_ALL_MOVIES_FAILURE',
        },
        {
          payload: { message: 'Network request failed' },
          type: 'ALERT_ERROR',
        },
      ]

      expect(actions).toEqual(expected)
    })
  })

  // TODO: mock fetch
  xdescribe('createMovie', () => {
    it('dispatches the correct actions', async () => {
      await store.dispatch(moviesThunks.createMovie())
      const actions = store.getActions()
      const expected = [
        { type: 'CREATE_MOVIE' },
        {
          payload: { error: 'Network request failed' },
          type: 'CREATE_MOVIE_FAILURE',
        },
        {
          payload: { message: 'Network request failed' },
          type: 'ALERT_ERROR',
        },
      ]

      expect(actions).toEqual(expected)
    })
  })
})
