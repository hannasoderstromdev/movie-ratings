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

  describe('getAllMovies', () => {
    it('dispatches the correct actions', async () => {
      const limit = 10
      const page = 1

      fetchMock.mock('/movies/?limit=10&page=1', {
        status: 200,
        headers: {
          'Content-Type': 'application/json',
        },
        body: {
          message: '',
          data: {
            movies: [{}],
            limit,
            numberOfItems: 1,
            page,
          },
        },
      })

      await store.dispatch(moviesThunks.getAllMovies({ limit, page }))
      const actions = store.getActions()
      const expected = [
        { type: 'GET_ALL_MOVIES' },
        {
          payload: {
            movies: [{}],
            limit,
            numberOfItems: 1,
            page,
          },
          type: 'GET_ALL_MOVIES_SUCCESS',
        },
      ]

      expect(actions).toEqual(expected)
    })
  })

  describe('getLatestMovies', () => {
    it('dispatches the correct actions', async () => {
      const limit = 4
      const movies = []
      for (let i = 0; i < limit; i++) {
        movies.push({})
      }
      fetchMock.mock(`/movies/latest/${limit}`, {
        status: 200,
        headers: {
          'Content-Type': 'application/json',
        },
        body: { data: movies },
      })
      await store.dispatch(moviesThunks.getLatestMovies(limit))
      const actions = store.getActions()
      const expected = [
        { type: 'GET_LATEST_MOVIES' },
        {
          payload: { movies: movies },
          type: 'GET_LATEST_MOVIES_SUCCESS',
        },
      ]

      expect(actions).toEqual(expected)
    })
  })

  describe('createMovie', () => {
    it('dispatches the correct actions', async () => {
      fetchMock.mock('/movies/create', {
        status: 200,
        headers: {
          'Content-Type': 'application/json',
        },
        body: { message: 'Movie added successfully' },
      })
      const movie = {}
      await store.dispatch(moviesThunks.createMovie(movie))
      const actions = store.getActions()
      const expected = [
        { type: 'CREATE_MOVIE' },
        {
          payload: {
            movie,
          },
          type: 'CREATE_MOVIE_SUCCESS',
        },
      ]

      expect(actions).toEqual(expected)
    })
  })

  describe('updateMovie', () => {
    it('dispatches the correct actions', async () => {
      const id = 'mId01'
      const movie = {
        id: 'mId01',
        title: 'the title',
      }
      const props = {
        title: 'new title',
      }
      fetchMock.mock(`/movies/${id}`, {
        status: 200,
        headers: {
          'Content-Type': 'application/json',
        },
        body: { data: [{ id: movie.id, title: props.title }] }, // fake update
      })
      await store.dispatch(moviesThunks.updateMovie(id, props))
      const actions = store.getActions()
      const expected = [
        { type: 'UPDATE_MOVIE' },
        {
          payload: { movie: [{ id: 'mId01', title: 'new title' }] },
          type: 'UPDATE_MOVIE_SUCCESS',
        },
      ]

      expect(actions).toEqual(expected)
    })
  })

  describe('deleteMovie', () => {
    it('dispatches the correct actions', async () => {
      const id = 'mId01'
      fetchMock.mock(`/movies/${id}`, {
        status: 200,
        headers: {
          'Content-Type': 'application/json',
        },
        body: { data: { id } },
      })
      await store.dispatch(moviesThunks.deleteMovie(id))
      const actions = store.getActions()
      const expected = [
        { type: 'DELETE_MOVIE' },
        { payload: { id }, type: 'DELETE_MOVIE_SUCCESS' },
        {
          payload: { message: 'Deleted', status: 200, type: 'alert' },
          type: 'SET_ERROR',
        },
      ]

      expect(actions).toEqual(expected)
    })
  })

  describe('findMovieByTitle', () => {
    it('dispatches the correct actions', async () => {
      const title = 'mId01'
      fetchMock.mock(`/movies/title/${title}`, {
        status: 200,
        headers: {
          'Content-Type': 'application/json',
        },
        body: { data: [{}] },
      })
      await store.dispatch(moviesThunks.findMovieByTitle(title))
      const actions = store.getActions()
      const expected = [
        { type: 'FIND_MOVIE_BY_TITLE' },
        { payload: { movie: [{}] }, type: 'FIND_MOVIE_BY_TITLE_SUCCESS' },
      ]

      expect(actions).toEqual(expected)
    })
  })

  describe('filterByRating', () => {
    it('dispatches the correct actions', async () => {
      const rating = '5'
      fetchMock.mock(`/movies/rating/${rating}`, {
        status: 200,
        headers: {
          'Content-Type': 'application/json',
        },
        body: { data: [{}] },
      })
      await store.dispatch(moviesThunks.filterByRating(rating))
      const actions = store.getActions()
      const expected = [
        { type: 'FILTER_BY_RATING' },
        { payload: { movies: [{}] }, type: 'FILTER_BY_RATING_SUCCESS' },
      ]

      expect(actions).toEqual(expected)
    })
  })
})
