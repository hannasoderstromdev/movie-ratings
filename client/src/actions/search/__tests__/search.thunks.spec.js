import configureStore from 'redux-mock-store'
import thunk from 'redux-thunk'

import searchThunks from '../search.thunks'

const middlewares = [thunk]
const mockStore = configureStore(middlewares)

describe('Actions/Search/Thunks', () => {
  const initialState = {}
  const store = mockStore(initialState)

  describe('searchOMDB', () => {
    it('dispatches the correct actions on missing token', async () => {
      await store.dispatch(searchThunks.searchOMDB('test'))
      const actions = store.getActions()
      const expected = [
        { type: 'SEARCH_FOR_MOVIE_TITLE' },
        { type: 'SEARCH_FOR_MOVIE_TITLE_FAILURE' },
        {
          payload: {
            message: 'searchService is not defined',
            status: undefined,
            type: 'danger',
          },
          type: 'SET_ERROR',
        },
      ]

      expect(actions).toEqual(expected)
    })
  })
})
