import configureStore from 'redux-mock-store'
import thunk from 'redux-thunk'

import {
  GET_ALL_MOVIES,
  GET_ALL_MOVIES_SUCCESS,
  GET_ALL_MOVIES_FAILURE,
  CREATE_MOVIE,
  CREATE_MOVIE_SUCCESS,
  CREATE_MOVIE_FAILURE,
  getAllMoviesAction,
  getAllMoviesSuccessAction,
  getAllMoviesFailureAction,
  createMovieAction,
  createMovieSuccessAction,
  createMovieFailureAction,
  getAllMovies,
  createMovie,
} from '../movies.actions'

const middlewares = [thunk]
const mockStore = configureStore(middlewares)

describe('Actions/Movies', () => {
  describe('getAllMoviesAction', () => {
    it(`returns ${GET_ALL_MOVIES}`, () => {
      const action = getAllMoviesAction()

      expect(action).toEqual({
        type: GET_ALL_MOVIES,
      })
    })
  })

  describe('getAllMoviesSuccessAction', () => {
    it(`returns ${GET_ALL_MOVIES_SUCCESS} and correct payload`, () => {
      const movies = []
      const action = getAllMoviesSuccessAction(movies)

      expect(action).toEqual({
        type: GET_ALL_MOVIES_SUCCESS,
        payload: { movies },
      })
    })
  })

  describe('getAllMoviesFailureAction', () => {
    it(`returns ${GET_ALL_MOVIES_FAILURE} and correct payload`, () => {
      const error = 'Error'
      const action = getAllMoviesFailureAction(error)

      expect(action).toEqual({
        type: GET_ALL_MOVIES_FAILURE,
        payload: { error },
      })
    })
  })

  describe('createMovieAction', () => {
    it(`returns ${CREATE_MOVIE} and correct payload`, () => {
      const action = createMovieAction()

      expect(action).toEqual({
        type: CREATE_MOVIE,
      })
    })
  })

  describe('createMovieSuccessAction', () => {
    it(`returns ${CREATE_MOVIE_SUCCESS} and correct payload`, () => {
      const movie = {}
      const action = createMovieSuccessAction(movie)

      expect(action).toEqual({
        type: CREATE_MOVIE_SUCCESS,
        payload: { movie },
      })
    })
  })

  describe('createMovieFailureAction', () => {
    it(`returns ${CREATE_MOVIE_FAILURE} and correct payload`, () => {
      const error = 'Error'
      const action = createMovieFailureAction(error)

      expect(action).toEqual({
        type: CREATE_MOVIE_FAILURE,
        payload: { error },
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

    // TODO: mock fetch
    xdescribe('getAllMovies', () => {
      it('dispatches the correct actions', async () => {
        await store.dispatch(getAllMovies())
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
        await store.dispatch(createMovie())
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
})
