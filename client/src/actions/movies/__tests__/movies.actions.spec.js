import moviesTypes from '../movies.types'
import moviesActions from '../movies.actions'

describe('Actions/Movies', () => {
  describe('getMovies', () => {
    describe('getMovies', () => {
      it(`returns ${moviesTypes.GET_MOVIES}`, () => {
        const action = moviesActions.getMovies()

        expect(action).toEqual({
          type: moviesTypes.GET_MOVIES,
        })
      })
    })

    describe('getMoviesSuccess', () => {
      it(`returns ${
        moviesTypes.GET_MOVIES_SUCCESS
      } and correct payload`, () => {
        const movies = { data: [] }
        const numberOfItems = 100
        const limit = 10
        const page = 1
        const filters = {
          title: '',
          genres: [],
          rating: 0,
        }
        const action = moviesActions.getMoviesSuccess({
          movies,
          numberOfItems,
          limit,
          page,
          filters,
        })

        expect(action).toEqual({
          type: moviesTypes.GET_MOVIES_SUCCESS,
          payload: { movies, numberOfItems, limit, page, filters },
        })
      })
    })

    describe('getMoviesFailure', () => {
      it(`returns ${
        moviesTypes.GET_MOVIES_FAILURE
      } and correct payload`, () => {
        const action = moviesActions.getMoviesFailure()

        expect(action).toEqual({
          type: moviesTypes.GET_MOVIES_FAILURE,
        })
      })
    })
  })

  describe('getLatestMovies', () => {
    describe('getLatestMovies', () => {
      it(`returns ${moviesTypes.GET_LATEST_MOVIES}`, () => {
        const action = moviesActions.getLatestMovies()

        expect(action).toEqual({
          type: moviesTypes.GET_LATEST_MOVIES,
        })
      })
    })

    describe('getLatestMoviesSuccess', () => {
      it(`returns ${moviesTypes.GET_LATEST_MOVIES_SUCCESS}`, () => {
        const movies = [{}]
        const action = moviesActions.getLatestMoviesSuccess({ movies })

        expect(action).toEqual({
          type: moviesTypes.GET_LATEST_MOVIES_SUCCESS,
          payload: { movies },
        })
      })
    })

    describe('getLatestMoviesFailure', () => {
      it(`returns ${moviesTypes.GET_LATEST_MOVIES_FAILURE}`, () => {
        const action = moviesActions.getLatestMoviesFailure()

        expect(action).toEqual({
          type: moviesTypes.GET_LATEST_MOVIES_FAILURE,
        })
      })
    })
  })

  describe('createMovie', () => {
    describe('createMovie', () => {
      it(`returns ${moviesTypes.CREATE_MOVIE} and correct payload`, () => {
        const action = moviesActions.createMovie()

        expect(action).toEqual({
          type: moviesTypes.CREATE_MOVIE,
        })
      })
    })

    describe('createMovieSuccess', () => {
      it(`returns ${
        moviesTypes.CREATE_MOVIE_SUCCESS
      } and correct payload`, () => {
        const movie = {}
        const action = moviesActions.createMovieSuccess(movie)

        expect(action).toEqual({
          type: moviesTypes.CREATE_MOVIE_SUCCESS,
          payload: { movie },
        })
      })
    })

    describe('createMovieFailure', () => {
      it(`returns ${
        moviesTypes.CREATE_MOVIE_FAILURE
      } and correct payload`, () => {
        const action = moviesActions.createMovieFailure()

        expect(action).toEqual({
          type: moviesTypes.CREATE_MOVIE_FAILURE,
        })
      })
    })
  })

  describe('updateMovie', () => {
    describe('updateMovie', () => {
      it(`returns ${moviesTypes.UPDATE_MOVIE}`, () => {
        const action = moviesActions.updateMovie()

        expect(action).toEqual({
          type: moviesTypes.UPDATE_MOVIE,
        })
      })
    })

    describe('updateMovieSuccess', () => {
      it(`returns ${moviesTypes.UPDATE_MOVIE_SUCCESS}`, () => {
        const movie = {}
        const action = moviesActions.updateMovieSuccess(movie)

        expect(action).toEqual({
          type: moviesTypes.UPDATE_MOVIE_SUCCESS,
          payload: { movie },
        })
      })
    })

    describe('updateMovieFailure', () => {
      it(`returns ${moviesTypes.UPDATE_MOVIE_FAILURE}`, () => {
        const action = moviesActions.updateMovieFailure()

        expect(action).toEqual({
          type: moviesTypes.UPDATE_MOVIE_FAILURE,
        })
      })
    })
  })

  describe('deleteMovie', () => {
    describe('deleteMovie', () => {
      it(`returns ${moviesTypes.DELETE_MOVIE}`, () => {
        const action = moviesActions.deleteMovie()

        expect(action).toEqual({
          type: moviesTypes.DELETE_MOVIE,
        })
      })
    })

    describe('deleteMovieSuccess', () => {
      it(`returns ${moviesTypes.DELETE_MOVIE_SUCCESS}`, () => {
        const id = 'id'
        const action = moviesActions.deleteMovieSuccess(id)

        expect(action).toEqual({
          type: moviesTypes.DELETE_MOVIE_SUCCESS,
          payload: { id },
        })
      })
    })

    describe('deleteMovieFailure', () => {
      it(`returns ${moviesTypes.DELETE_MOVIE_FAILURE}`, () => {
        const action = moviesActions.deleteMovieFailure()

        expect(action).toEqual({
          type: moviesTypes.DELETE_MOVIE_FAILURE,
        })
      })
    })
  })

  describe('setFilterTitle', () => {
    it(`returns ${moviesTypes.SET_FILTER_TITLE}`, () => {
      const title = 'The Title'
      const action = moviesActions.setFilterTitle(title)
      expect(action).toEqual({
        type: moviesTypes.SET_FILTER_TITLE,
        payload: { title },
      })
    })
  })

  describe('setFilterGenres', () => {
    it(`returns ${moviesTypes.SET_FILTER_GENRES}`, () => {
      const genres = ['genresId01', 'genresId02']
      const action = moviesActions.setFilterGenres(genres)
      expect(action).toEqual({
        type: moviesTypes.SET_FILTER_GENRES,
        payload: { genres },
      })
    })
  })

  describe('setFilterRating', () => {
    it(`returns ${moviesTypes.SET_FILTER_RATING}`, () => {
      const rating = 5
      const action = moviesActions.setFilterRating(rating)
      expect(action).toEqual({
        type: moviesTypes.SET_FILTER_RATING,
        payload: { rating },
      })
    })
  })
})
