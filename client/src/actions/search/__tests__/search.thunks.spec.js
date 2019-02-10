import configureStore from 'redux-mock-store'
import thunk from 'redux-thunk'
import fetchMock from 'fetch-mock'

import searchThunks from '../search.thunks'

const middlewares = [thunk]
const mockStore = configureStore(middlewares)

describe('Actions/Search/Thunks', () => {
  const initialState = {}
  const store = mockStore(initialState)
  fetchMock.config.overwriteRoutes = true

  describe('searchByTitle', () => {
    beforeEach(() => {
      localStorage.setItem('user', JSON.stringify({ token: 'fake token' }))
    })

    afterEach(() => {
      localStorage.clear()
    })

    it('dispatches the correct actions on missing token', async () => {
      fetchMock.mock('/search/?movieTitle=test', {
        status: 200,
        headers: { 'Content-Type ': 'application/json' },
        body: { status: 'success', data: [{}], inLibrary: false },
      })

      await store.dispatch(searchThunks.searchByTitle('test'))
      const actions = store.getActions()
      const expected = [
        { type: 'SEARCH_FOR_MOVIE_TITLE' },
        {
          payload: { inLibrary: false, movie: [{}] },
          type: 'SEARCH_FOR_MOVIE_TITLE_SUCCESS',
        },
      ]

      expect(actions).toEqual(expected)
    })
  })
})
