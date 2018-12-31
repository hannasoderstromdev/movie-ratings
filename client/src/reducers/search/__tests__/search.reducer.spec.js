import {
  SEARCH_FOR_MOVIE_TITLE,
  SEARCH_FOR_MOVIE_TITLE_FAILURE,
  SEARCH_FOR_MOVIE_TITLE_SUCCESS,
} from 'actions/search/search.actions'

import reducer from '../search.reducer'

describe('Reducers/Search', () => {
  it(`handles ${SEARCH_FOR_MOVIE_TITLE}`, () => {
    const action = {
      type: SEARCH_FOR_MOVIE_TITLE,
    }
    const expectedState = { error: false, loading: true, movie: null }
    expect(reducer({}, action)).toEqual(expectedState)
  })

  it(`handles ${SEARCH_FOR_MOVIE_TITLE_FAILURE}`, () => {
    const action = {
      type: SEARCH_FOR_MOVIE_TITLE_FAILURE,
    }
    const expectedState = { error: true, loading: false, movie: null }
    expect(reducer({}, action)).toEqual(expectedState)
  })

  it(`handles ${SEARCH_FOR_MOVIE_TITLE_SUCCESS}`, () => {
    const movie = {}
    const action = {
      type: SEARCH_FOR_MOVIE_TITLE_SUCCESS,
      payload: { movie },
    }
    const expectedState = { error: false, loading: false, movie: {} }
    expect(reducer({}, action)).toEqual(expectedState)
  })
})
