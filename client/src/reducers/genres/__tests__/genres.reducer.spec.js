import genresTypes from 'actions/genres/genres.types'
import reducer from '../genres.reducer'

describe('Reducers/ErrorHandler', () => {
  const initialState = {
    loading: false,
    genres: {},
    error: false,
    filter: {},
  }

  it(`handles ${genresTypes.LOAD_GENRES_INIT}`, () => {
    const expectedState = {
      loading: true,
      genres: {},
      error: false,
      filter: {},
    }
    const action = {
      type: genresTypes.LOAD_GENRES_INIT,
    }
    expect(reducer(initialState, action)).toEqual(expectedState)
  })
  it(`handles ${genresTypes.LOAD_GENRES_SUCCESS}`, () => {
    const genres = {
      genreId01: { name: 'Action' },
      genreId02: { name: 'Drama' },
    }

    const expectedState = {
      loading: false,
      genres,
      error: false,
      filter: {},
    }
    const action = {
      type: genresTypes.LOAD_GENRES_SUCCESS,
      payload: { genres },
    }
    expect(reducer(initialState, action)).toEqual(expectedState)
  })
  it(`handles ${genresTypes.LOAD_GENRES_FAILURE}`, () => {
    const expectedState = {
      loading: false,
      genres: {},
      error: true,
      filter: {},
    }
    const action = {
      type: genresTypes.LOAD_GENRES_FAILURE,
    }
    expect(reducer(initialState, action)).toEqual(expectedState)
  })
  it(`handles ${genresTypes.ADD_TO_GENRE_FILTER}`, () => {
    const filter = {
      genreId01: { name: 'Action' },
    }
    const expectedState = {
      loading: false,
      genres: {},
      error: false,
      filter,
    }
    const id = 'genreId01'
    const genre = { name: 'Action' }
    const action = {
      type: genresTypes.ADD_TO_GENRE_FILTER,
      payload: { id, genre },
    }
    expect(reducer(initialState, action)).toEqual(expectedState)
  })
  it(`handles ${genresTypes.REMOVE_FROM_GENRE_FILTER}`, () => {
    const initialState = {
      loading: false,
      genres: {},
      error: false,
      filter: {
        genreId01: { name: 'Action' },
        genreId02: { name: 'Drama' },
      },
    }
    const expectedState = {
      loading: false,
      genres: {},
      error: false,
      filter: {
        genreId02: { name: 'Drama' },
      },
    }
    const id = 'genreId01'
    const action = {
      type: genresTypes.REMOVE_FROM_GENRE_FILTER,
      payload: { id },
    }
    expect(reducer(initialState, action)).toEqual(expectedState)
  })
})
