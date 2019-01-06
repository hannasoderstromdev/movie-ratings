import searchTypes from 'actions/search/search.types'

import reducer from '../search.reducer'

describe('Reducers/Search', () => {
  it(`handles ${searchTypes.SEARCH_FOR_MOVIE_TITLE}`, () => {
    const action = {
      type: searchTypes.SEARCH_FOR_MOVIE_TITLE,
    }
    const expectedState = { error: false, loading: true, movie: null }
    expect(reducer({}, action)).toEqual(expectedState)
  })

  it(`handles ${searchTypes.SEARCH_FOR_MOVIE_TITLE_FAILURE}`, () => {
    const action = {
      type: searchTypes.SEARCH_FOR_MOVIE_TITLE_FAILURE,
    }
    const expectedState = { error: true, loading: false, movie: null }
    expect(reducer({}, action)).toEqual(expectedState)
  })

  it(`handles ${searchTypes.SEARCH_FOR_MOVIE_TITLE_SUCCESS}`, () => {
    const movie = {}
    const action = {
      type: searchTypes.SEARCH_FOR_MOVIE_TITLE_SUCCESS,
      payload: { movie },
    }
    const expectedState = { error: false, loading: false, movie: {} }
    expect(reducer({}, action)).toEqual(expectedState)
  })
})
