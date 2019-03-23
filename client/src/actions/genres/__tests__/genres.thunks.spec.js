import configureStore from 'redux-mock-store'
import thunk from 'redux-thunk'
import fetchMock from 'fetch-mock'

import genresThunks from '../genres.thunks'

const middlewares = [thunk]
const mockStore = configureStore(middlewares)

describe('Actions/Genres/Thunks', () => {
  let initialState
  let store
  fetchMock.config.overwriteRoutes = true

  beforeEach(() => {
    initialState = {}
    store = mockStore(initialState)
    localStorage.setItem('user', JSON.stringify({ token: 'fake token' }))
  })

  afterEach(() => {
    localStorage.clear()
  })

  describe('getAll', () => {
    it('dispatches the correct actions', async () => {
      fetchMock.mock('/genres', {
        status: 200,
        headers: {
          'Content-Type': 'application/json',
        },
        body: {
          message: 'success',
          data: {
            genres: [
              {
                _id: 'genreId01',
                name: 'Drama',
              },
              {
                _id: 'genreId02',
                name: 'Action',
              },
            ],
          },
        },
      })

      await store.dispatch(genresThunks.getAll())
      const actions = store.getActions()
      const expected = [
        { type: 'LOAD_GENRES_INIT' },
        {
          payload: {
            genres: {
              genreId01: { name: 'Drama' },
              genreId02: { name: 'Action' },
            },
          },
          type: 'LOAD_GENRES_SUCCESS',
        },
      ]

      expect(actions).toEqual(expected)
    })
  })
})
