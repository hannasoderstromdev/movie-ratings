import {
  GET_ALL_MOVIES,
  GET_ALL_MOVIES_SUCCESS,
  GET_ALL_MOVIES_FAILURE,
} from 'actions/movies/movies.actions'

import reducer from '../movies.reducer'

describe('Reducers/Movies', () => {
  it(`handles ${GET_ALL_MOVIES}`, () => {
    const action = {
      type: GET_ALL_MOVIES,
    }
    const expectedState = { error: null, loading: true, movies: [] }
    expect(reducer({}, action)).toEqual(expectedState)
  })

  it(`handles ${GET_ALL_MOVIES_SUCCESS}`, () => {
    const movies = []
    const action = {
      type: GET_ALL_MOVIES_SUCCESS,
      payload: { movies },
    }
    const expectedState = { error: null, loading: false, movies: [] }
    expect(reducer({}, action)).toEqual(expectedState)
  })

  it(`handles ${GET_ALL_MOVIES_FAILURE}`, () => {
    const action = {
      type: GET_ALL_MOVIES_FAILURE,
    }
    const expectedState = { error: true, loading: false, movies: [] }
    expect(reducer({}, action)).toEqual(expectedState)
  })
})
