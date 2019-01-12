import configureStore from 'redux-mock-store'
import thunk from 'redux-thunk'
import fetchMock from 'fetch-mock'

import moviesThunks from '../movies.thunks'

const middlewares = [thunk]
const mockStore = configureStore(middlewares)

describe('Actions/Movies/Thunks', () => {
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

  // TODO: mock fetch
  describe('getAllMovies', () => {
    it('dispatches the correct actions', async () => {
      fetchMock.mock('/movies', {
        status: 200,
        headers: {
          'Content-Type': 'application/json',
        },
        body: { data: [{}] },
      })
      await store.dispatch(moviesThunks.getAllMovies())
      const actions = store.getActions()
      const expected = [
        { type: 'GET_ALL_MOVIES' },
        {
          payload: {
            movies: [{}],
          },
          type: 'GET_ALL_MOVIES_SUCCESS',
        },
      ]

      expect(actions).toEqual(expected)
    })
  })

  // TODO: mock fetch
  describe('createMovie', () => {
    it('dispatches the correct actions', async () => {
      fetchMock.mock('/movies/create', {
        status: 200,
        headers: {
          'Content-Type': 'application/json',
        },
        body: { message: 'Movie added successfully' },
      })
      await store.dispatch(moviesThunks.createMovie())
      const actions = store.getActions()
      const expected = [
        { type: 'CREATE_MOVIE' },
        {
          payload: {
            movie: { message: 'Movie added successfully' },
          },
          type: 'CREATE_MOVIE_SUCCESS',
        },
      ]

      expect(actions).toEqual(expected)
    })
  })
})
