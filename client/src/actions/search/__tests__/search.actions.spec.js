import searchActions from '../search.actions'
import searchTypes from '../search.types'

describe('Actions/Search', () => {
  describe('searchByTitle', () => {
    it(`returns ${searchTypes.SEARCH_FOR_MOVIE_TITLE}`, () => {
      const action = searchActions.searchByTitle()

      expect(action).toEqual({
        type: searchTypes.SEARCH_FOR_MOVIE_TITLE,
      })
    })
  })

  describe('searchByTitleSuccess', () => {
    it(`returns ${searchTypes.SEARCH_FOR_MOVIE_TITLE_SUCCESS}`, () => {
      const movie = {}
      const action = searchActions.searchByTitleSuccess(movie)

      expect(action).toEqual({
        type: searchTypes.SEARCH_FOR_MOVIE_TITLE_SUCCESS,
        payload: { movie },
      })
    })
  })

  describe('searchByTitleFailure', () => {
    it(`returns ${searchTypes.SEARCH_FOR_MOVIE_TITLE_FAILURE}`, () => {
      const action = searchActions.searchByTitleFailure()

      expect(action).toEqual({
        type: searchTypes.SEARCH_FOR_MOVIE_TITLE_FAILURE,
      })
    })
  })
})
