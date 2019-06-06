import genresSelectors from '../genres.selectors'

const state = {
  genres: {
    loading: false,
    genres: {
      genresId01: { name: 'Animation' },
      genresId02: { name: 'Family' },
      genresId03: { name: 'Musical' },
    },
  },
}

describe('Selectors/Genres', () => {
  describe('getGenres', () => {
    it('returns genres', () => {
      expect(genresSelectors.getGenres(state)).toEqual(state.genres)
    })
  })

  describe('getGenresObj', () => {
    it('returns list of genres as object', () => {
      expect(genresSelectors.getGenresObj(state)).toEqual(state.genres.genres)
    })
  })

  describe('getGenresArray', () => {
    it('returns list of genres as array', () => {
      const result = [
        { id: 'genresId01', name: 'Animation' },
        { id: 'genresId02', name: 'Family' },
        { id: 'genresId03', name: 'Musical' },
      ]
      expect(genresSelectors.getGenresArray(state)).toEqual(result)
    })
  })
})
