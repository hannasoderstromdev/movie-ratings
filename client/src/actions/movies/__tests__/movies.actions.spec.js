import moviesTypes from '../movies.types'
import moviesActions from '../movies.actions'

describe('Actions/Movies', () => {
  describe('getAllMovies', () => {
    describe('getAllMovies', () => {
      it(`returns ${moviesTypes.GET_ALL_MOVIES}`, () => {
        const action = moviesActions.getAllMovies()

        expect(action).toEqual({
          type: moviesTypes.GET_ALL_MOVIES,
        })
      })
    })

    describe('getAllMoviesSuccess', () => {
      it(`returns ${
        moviesTypes.GET_ALL_MOVIES_SUCCESS
      } and correct payload`, () => {
        const movies = { data: [] }
        const action = moviesActions.getAllMoviesSuccess({ movies: movies })

        expect(action).toEqual({
          type: moviesTypes.GET_ALL_MOVIES_SUCCESS,
          payload: { movies },
        })
      })
    })

    describe('getAllMoviesFailure', () => {
      it(`returns ${
        moviesTypes.GET_ALL_MOVIES_FAILURE
      } and correct payload`, () => {
        const action = moviesActions.getAllMoviesFailure()

        expect(action).toEqual({
          type: moviesTypes.GET_ALL_MOVIES_FAILURE,
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
})
