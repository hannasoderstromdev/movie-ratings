import searchActions from '../search.actions'
import searchTypes from '../search.types'

describe('Actions/Search', () => {
  describe('searchForMovieTitle', () => {
    it(`returns ${searchTypes.SEARCH_FOR_MOVIE_TITLE}`, () => {
      const action = searchActions.searchForMovieTitle()

      expect(action).toEqual({
        type: searchTypes.SEARCH_FOR_MOVIE_TITLE,
      })
    })
  })

  describe('searchForMovieTitleSuccess', () => {
    it(`returns ${searchTypes.SEARCH_FOR_MOVIE_TITLE_SUCCESS}`, () => {
      const movie = {}
      const action = searchActions.searchForMovieTitleSuccess(movie)

      expect(action).toEqual({
        type: searchTypes.SEARCH_FOR_MOVIE_TITLE_SUCCESS,
        payload: { movie },
      })
    })
  })

  describe('searchForMovieTitleFailure', () => {
    it(`returns ${searchTypes.SEARCH_FOR_MOVIE_TITLE_FAILURE}`, () => {
      const action = searchActions.searchForMovieTitleFailure()

      expect(action).toEqual({
        type: searchTypes.SEARCH_FOR_MOVIE_TITLE_FAILURE,
      })
    })
  })
})
