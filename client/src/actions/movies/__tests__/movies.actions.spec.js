import {
  GET_ALL_MOVIES,
  GET_ALL_MOVIES_SUCCESS,
  GET_ALL_MOVIES_FAILURE,
  CREATE_MOVIE,
  CREATE_MOVIE_SUCCESS,
  CREATE_MOVIE_FAILURE,
  getAllMoviesAction,
  getAllMoviesSuccessAction,
  getAllMoviesFailureAction,
  createMovieAction,
  createMovieSuccessAction,
  createMovieFailureAction,
} from '../movies.actions'

describe('Actions/Movies', () => {
  describe('getAllMoviesAction', () => {
    it(`returns ${GET_ALL_MOVIES}`, () => {
      const action = getAllMoviesAction()

      expect(action).toEqual({
        type: GET_ALL_MOVIES,
      })
    })
  })

  describe('getAllMoviesSuccessAction', () => {
    it(`returns ${GET_ALL_MOVIES_SUCCESS} and correct payload`, () => {
      const movies = { data: [] }
      const action = getAllMoviesSuccessAction({ movies: movies })

      expect(action).toEqual({
        type: GET_ALL_MOVIES_SUCCESS,
        payload: { movies },
      })
    })
  })

  describe('getAllMoviesFailureAction', () => {
    it(`returns ${GET_ALL_MOVIES_FAILURE} and correct payload`, () => {
      const action = getAllMoviesFailureAction()

      expect(action).toEqual({
        type: GET_ALL_MOVIES_FAILURE,
      })
    })
  })

  describe('createMovieAction', () => {
    it(`returns ${CREATE_MOVIE} and correct payload`, () => {
      const action = createMovieAction()

      expect(action).toEqual({
        type: CREATE_MOVIE,
      })
    })
  })

  describe('createMovieSuccessAction', () => {
    it(`returns ${CREATE_MOVIE_SUCCESS} and correct payload`, () => {
      const movie = {}
      const action = createMovieSuccessAction(movie)

      expect(action).toEqual({
        type: CREATE_MOVIE_SUCCESS,
        payload: { movie },
      })
    })
  })

  describe('createMovieFailureAction', () => {
    it(`returns ${CREATE_MOVIE_FAILURE} and correct payload`, () => {
      const action = createMovieFailureAction()

      expect(action).toEqual({
        type: CREATE_MOVIE_FAILURE,
      })
    })
  })
})
