import {
  SEARCH_FOR_MOVIE_TITLE,
  SEARCH_FOR_MOVIE_TITLE_FAILURE,
  SEARCH_FOR_MOVIE_TITLE_SUCCESS,
} from 'actions/search/search.actions'

import reducer from '../search.reducer'

describe('Reducers/Movies', () => {
  it(`handles ${SEARCH_FOR_MOVIE_TITLE}`, () => {
    const action = {
      type: SEARCH_FOR_MOVIE_TITLE,
    }
    const expectedState = { error: null, loading: true, movie: null }
    expect(reducer({}, action)).toEqual(expectedState)
  })

  it(`handles ${SEARCH_FOR_MOVIE_TITLE_FAILURE}`, () => {
    const error = 'Failed'
    const action = {
      type: SEARCH_FOR_MOVIE_TITLE_FAILURE,
      payload: { error },
    }
    const expectedState = { error: 'Failed', loading: false, movie: null }
    expect(reducer({}, action)).toEqual(expectedState)
  })

  it(`handles ${SEARCH_FOR_MOVIE_TITLE_SUCCESS}`, () => {
    const movie = {}
    const action = {
      type: SEARCH_FOR_MOVIE_TITLE_SUCCESS,
      payload: { movie },
    }
    const expectedState = { error: null, loading: false, movie: {} }
    expect(reducer({}, action)).toEqual(expectedState)
  })
})
