import moviesTypes from 'actions/movies/movies.types'

import reducer from '../movies.reducer'

describe('Reducers/Movies', () => {
  const initialState = {
    loading: false,
    movies: [],
    error: null,
    numberOfItems: 0,
    limit: 0,
    page: 1,
    genres: [],
    rating: 0,
    selectedMovieId: null,
  }

  describe('getMovies', () => {
    it(`handles ${moviesTypes.GET_MOVIES}`, () => {
      const action = {
        type: moviesTypes.GET_MOVIES,
      }
      const expectedState = {
        ...initialState,
        error: false,
        loading: true,
        movies: [],
        numberOfItems: 0,
      }
      expect(reducer(initialState, action)).toEqual(expectedState)
    })

    it(`handles ${moviesTypes.GET_MOVIES_SUCCESS}`, () => {
      const movies = []
      const limit = 10
      const numberOfItems = 10
      const page = 1
      const action = {
        type: moviesTypes.GET_MOVIES_SUCCESS,
        payload: { movies, limit, numberOfItems, page },
      }
      const expectedState = {
        ...initialState,
        limit,
        numberOfItems,
        page,
        error: false,
        loading: false,
        movies,
      }
      expect(reducer(initialState, action)).toEqual(expectedState)
    })

    it(`handles ${moviesTypes.GET_MOVIES_FAILURE}`, () => {
      const action = {
        type: moviesTypes.GET_MOVIES_FAILURE,
      }
      const expectedState = {
        ...initialState,
        error: true,
        loading: false,
        movies: [],
        numberOfItems: 0,
        page: 1,
      }
      expect(reducer(initialState, action)).toEqual(expectedState)
    })
  })

  describe('getLatestMovies', () => {
    it(`handles ${moviesTypes.GET_LATEST_MOVIES}`, () => {
      const action = {
        type: moviesTypes.GET_LATEST_MOVIES,
      }
      const expectedState = {
        ...initialState,
        error: false,
        loading: true,
        movies: [],
        numberOfItems: 0,
      }
      expect(reducer(initialState, action)).toEqual(expectedState)
    })

    it(`handles ${moviesTypes.GET_LATEST_MOVIES_FAILURE}`, () => {
      const action = {
        type: moviesTypes.GET_LATEST_MOVIES_FAILURE,
      }
      const expectedState = {
        ...initialState,
        error: true,
        loading: false,
        movies: [],
        numberOfItems: 0,
      }
      expect(reducer(initialState, action)).toEqual(expectedState)
    })

    it(`handles ${moviesTypes.GET_LATEST_MOVIES_SUCCESS}`, () => {
      const movies = [{}]
      const action = {
        type: moviesTypes.GET_LATEST_MOVIES_SUCCESS,
        payload: { movies },
      }
      const expectedState = {
        ...initialState,
        error: false,
        loading: false,
        movies,
        numberOfItems: 1,
      }
      expect(reducer(initialState, action)).toEqual(expectedState)
    })
  })

  describe('createMovie', () => {
    it(`handles ${moviesTypes.CREATE_MOVIE}`, () => {
      const action = {
        type: moviesTypes.CREATE_MOVIE,
      }
      const expectedState = {
        ...initialState,
        error: false,
        loading: true,
        movies: [],
      }
      expect(reducer(initialState, action)).toEqual(expectedState)
    })

    it(`handles ${moviesTypes.CREATE_MOVIE_FAILURE}`, () => {
      const action = {
        type: moviesTypes.CREATE_MOVIE_FAILURE,
      }
      const expectedState = {
        ...initialState,
        error: true,
        loading: false,
        movies: [],
      }
      expect(reducer(initialState, action)).toEqual(expectedState)
    })

    it(`handles ${moviesTypes.CREATE_MOVIE_SUCCESS}`, () => {
      const movie = { id: 'mid01', title: 'title' }
      const action = {
        type: moviesTypes.CREATE_MOVIE_SUCCESS,
        payload: { movie },
      }
      const expectedState = {
        ...initialState,
        error: false,
        loading: false,
        movies: [...initialState.movies, movie],
      }
      expect(reducer(initialState, action)).toEqual(expectedState)
    })
  })

  describe('updateMovie', () => {
    it(`handles ${moviesTypes.UPDATE_MOVIE}`, () => {
      const action = {
        type: moviesTypes.UPDATE_MOVIE,
      }
      const expectedState = {
        ...initialState,
        error: false,
        loading: true,
        movies: [],
      }
      expect(reducer(initialState, action)).toEqual(expectedState)
    })

    it(`handles ${moviesTypes.UPDATE_MOVIE_FAILURE}`, () => {
      const action = {
        type: moviesTypes.UPDATE_MOVIE_FAILURE,
      }
      const expectedState = {
        ...initialState,
        error: true,
        loading: false,
        movies: [],
      }
      expect(reducer(initialState, action)).toEqual(expectedState)
    })

    it(`handles ${moviesTypes.UPDATE_MOVIE_SUCCESS}`, () => {
      const initialState = {
        error: false,
        loading: false,
        movies: [
          {
            id: 'mid01',
            title: 'the title',
          },
        ],
      }
      const movie = { id: 'mid01', title: 'new title' }
      const action = {
        type: moviesTypes.UPDATE_MOVIE_SUCCESS,
        payload: { movie },
      }
      const expectedState = {
        ...initialState,
        error: false,
        loading: false,
        movies: [movie],
      }
      expect(reducer(initialState, action)).toEqual(expectedState)
    })
  })

  describe('deleteMovie', () => {
    it(`handles ${moviesTypes.DELETE_MOVIE}`, () => {
      const action = {
        type: moviesTypes.DELETE_MOVIE,
      }
      const expectedState = {
        ...initialState,
        error: false,
        loading: true,
        movies: [],
      }
      expect(reducer(initialState, action)).toEqual(expectedState)
    })

    it(`handles ${moviesTypes.DELETE_MOVIE_FAILURE}`, () => {
      const action = {
        type: moviesTypes.DELETE_MOVIE_FAILURE,
      }
      const expectedState = {
        ...initialState,
        error: true,
        loading: false,
        movies: [],
      }
      expect(reducer(initialState, action)).toEqual(expectedState)
    })

    it(`handles ${moviesTypes.DELETE_MOVIE_SUCCESS}`, () => {
      const initialState = {
        error: false,
        loading: false,
        movies: [
          {
            id: 'mid01',
            title: 'title',
          },
          {
            id: 'mid02',
            title: 'title',
          },
        ],
        selectedMovieId: 'movieId01',
      }
      const action = {
        type: moviesTypes.DELETE_MOVIE_SUCCESS,
        payload: { id: 'mid01' },
      }
      const expectedState = {
        ...initialState,
        error: false,
        loading: false,
        movies: [{ ...initialState.movies[1] }],
        selectedMovieId: null,
      }
      expect(reducer(initialState, action)).toEqual(expectedState)
    })
  })

  describe('findByTitle', () => {
    it(`handles ${moviesTypes.FIND_MOVIE_BY_TITLE}`, () => {
      const action = {
        type: moviesTypes.FIND_MOVIE_BY_TITLE,
      }
      const expectedState = {
        ...initialState,
        error: false,
        loading: true,
        movies: [],
      }
      expect(reducer(initialState, action)).toEqual(expectedState)
    })
    it(`handles ${moviesTypes.FIND_MOVIE_BY_TITLE_FAILURE}`, () => {
      const action = {
        type: moviesTypes.FIND_MOVIE_BY_TITLE_FAILURE,
      }
      const expectedState = {
        ...initialState,
        error: true,
        loading: false,
        movies: [],
      }
      expect(reducer(initialState, action)).toEqual(expectedState)
    })
    it(`handles ${moviesTypes.FIND_MOVIE_BY_TITLE_SUCCESS}`, () => {
      const movie = [{}]
      const action = {
        type: moviesTypes.FIND_MOVIE_BY_TITLE_SUCCESS,
        payload: { movie },
      }
      const expectedState = {
        ...initialState,
        error: false,
        loading: false,
        movies: movie,
      }
      expect(reducer(initialState, action)).toEqual(expectedState)
    })
  })

  describe('setSelectedMovie', () => {
    it(`handles ${moviesTypes.SET_SELECTED_MOVIE}`, () => {
      const movieId = 'movieId01'
      const action = {
        type: moviesTypes.SET_SELECTED_MOVIE,
        payload: { movieId },
      }
      const expectedState = {
        ...initialState,
        selectedMovieId: movieId,
      }
      expect(reducer(initialState, action)).toEqual(expectedState)
    })
    it(`handles ${moviesTypes.CLEAR_SELECTED_MOVIE}`, () => {
      const action = {
        type: moviesTypes.CLEAR_SELECTED_MOVIE,
      }
      const expectedState = {
        ...initialState,
      }
      expect(reducer(initialState, action)).toEqual(expectedState)
    })
  })

  // TODO: remove if not used
  describe('setFilters', () => {
    it(`handles ${moviesTypes.SET_FILTER_GENRES}`, () => {
      const genres = ['genresId01', 'genresId02']
      const action = {
        type: moviesTypes.SET_FILTER_GENRES,
        payload: { genres },
      }
      const expectedState = {
        ...initialState,
        genres,
      }
      expect(reducer(initialState, action)).toEqual(expectedState)
    })
    it(`handles ${moviesTypes.SET_FILTER_RATING}`, () => {
      const rating = 5
      const action = {
        type: moviesTypes.SET_FILTER_RATING,
        payload: { rating },
      }
      const expectedState = {
        ...initialState,
        rating,
      }
      expect(reducer(initialState, action)).toEqual(expectedState)
    })
  })
})
