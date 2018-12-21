import configureStore from 'redux-mock-store'
import thunk from 'redux-thunk'

import {
  SEARCH_FOR_MOVIE_TITLE,
  SEARCH_FOR_MOVIE_TITLE_SUCCESS,
  SEARCH_FOR_MOVIE_TITLE_FAILURE,
  searchForMovieTitleAction,
  searchForMovieTitleSuccessAction,
  searchForMovieTitleFailureAction,
  searchOMDB,
} from '../search.actions'

const middlewares = [thunk]
const mockStore = configureStore(middlewares)

describe('Actions/Search', () => {
  describe('searchForMovieTitleAction', () => {
    it(`returns ${SEARCH_FOR_MOVIE_TITLE}`, () => {
      const action = searchForMovieTitleAction()

      expect(action).toEqual({
        type: SEARCH_FOR_MOVIE_TITLE,
      })
    })
  })

  describe('searchForMovieTitleSuccessAction', () => {
    it(`returns ${SEARCH_FOR_MOVIE_TITLE_SUCCESS}`, () => {
      const movie = {}
      const action = searchForMovieTitleSuccessAction(movie)

      expect(action).toEqual({
        type: SEARCH_FOR_MOVIE_TITLE_SUCCESS,
        payload: { movie },
      })
    })
  })

  describe('searchForMovieTitleFailureAction', () => {
    it(`returns ${SEARCH_FOR_MOVIE_TITLE_FAILURE}`, () => {
      const error = 'Error'
      const action = searchForMovieTitleFailureAction(error)

      expect(action).toEqual({
        type: SEARCH_FOR_MOVIE_TITLE_FAILURE,
        payload: { error },
      })
    })
  })

  describe('Thunks', () => {
    const initialState = {}
    const store = mockStore(initialState)

    describe('searchOMDB', () => {
      it('dispatches the correct actions on missing token', async () => {
        await store.dispatch(searchOMDB('test'))
        const actions = store.getActions()
        const expected = [
          { type: 'SEARCH_FOR_MOVIE_TITLE' },
          {
            payload: { error: "Cannot read property 'token' of null" },
            type: 'SEARCH_FOR_MOVIE_TITLE_FAILURE',
          },
          {
            payload: { message: "Cannot read property 'token' of null" },
            type: 'ALERT_ERROR',
          },
        ]

        expect(actions).toEqual(expected)
      })
    })
  })
})
