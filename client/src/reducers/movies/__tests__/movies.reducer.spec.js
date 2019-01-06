import moviesTypes from 'actions/movies/movies.types'

import reducer from '../movies.reducer'

describe('Reducers/Movies', () => {
  const initialState = {
    error: false,
    loading: false,
    movies: [],
  }

  it(`handles ${moviesTypes.GET_ALL_MOVIES}`, () => {
    const action = {
      type: moviesTypes.GET_ALL_MOVIES,
    }
    const expectedState = { error: false, loading: true, movies: [] }
    expect(reducer(initialState, action)).toEqual(expectedState)
  })

  it(`handles ${moviesTypes.GET_ALL_MOVIES_SUCCESS}`, () => {
    const movies = []
    const action = {
      type: moviesTypes.GET_ALL_MOVIES_SUCCESS,
      payload: { movies },
    }
    const expectedState = { error: false, loading: false, movies: [] }
    expect(reducer(initialState, action)).toEqual(expectedState)
  })

  it(`handles ${moviesTypes.GET_ALL_MOVIES_FAILURE}`, () => {
    const action = {
      type: moviesTypes.GET_ALL_MOVIES_FAILURE,
    }
    const expectedState = { error: true, loading: false, movies: [] }
    expect(reducer(initialState, action)).toEqual(expectedState)
  })
})
