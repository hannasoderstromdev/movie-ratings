import moviesSelectors from '../movies.selectors'

import movies from 'mockStore/movies'

const state = {
  movies: {
    loading: false,
    movies,
    error: true,
    numberOfItems: 0,
    limit: 0,
    page: 1,
    showSearchLibrary: false,
    genres: [],
    rating: 0,
    selectedMovieId: 'mid01',
  },
}

describe('Selectors/Movies', () => {
  describe('getMovies', () => {
    it('returns movies', () => {
      expect(moviesSelectors.getMovies(state)).toEqual(movies)
    })
  })

  describe('getSelectedMovieId', () => {
    it('returns selectedMovieId', () => {
      expect(moviesSelectors.getSelectedMovieId(state)).toEqual(
        state.movies.selectedMovieId,
      )
    })
  })

  describe('getSelectedMovie', () => {
    it('returns selected movie', () => {
      expect(moviesSelectors.getSelectedMovie(state)).toEqual(movies[0])
    })
  })
})
