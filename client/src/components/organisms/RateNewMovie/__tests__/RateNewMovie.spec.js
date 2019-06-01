import React from 'react'
import { render, cleanup } from '@testing-library/react'
import { BrowserRouter as Router } from 'react-router-dom'
import configureStore from 'redux-mock-store'

import Root from 'components/Root'
import Theme from 'components/Theme'

import RateNewMovie from '..'

describe('Components/Organisms/RateNewMovie', () => {
  describe('renders', () => {
    const mockStore = configureStore()

    let utils
    let props

    beforeEach(() => {
      utils = state => {
        const store = mockStore(state)
        props = {
          openFullMovie: jest.fn(),
        }
        return render(
          <Root store={store}>
            <Router>
              <Theme>
                <RateNewMovie {...props} />
              </Theme>
            </Router>
          </Root>,
        )
      }
    })

    afterEach(() => cleanup())

    it('without movie', () => {
      const state = {
        movies: {
          movies: [],
        },
        search: {
          loading: false,
          movie: null,
        },
        user: {
          profile: {
            user: {
              role: 'Admin',
            },
          },
        },
      }

      const searchText = utils(state).getByText(/Search for a movie to add/i)
      expect(searchText).toBeDefined()
    })

    it('with movie', () => {
      const state = {
        movies: {
          movies: [],
        },
        search: {
          loading: false,
          movie: {
            id: 'mId01',
            actors: '',
            awards: '',
            country: '',
            director: '',
            genres: {},
            imdbID: '',
            imdbRating: '',
            language: '',
            metascore: '',
            plot: '',
            poster: 'http://images.com/picture01.jpg',
            production: 'movie company ltd',
            rating: 4,
            ratings: [],
            released: '2019',
            runtime: '120 min',
            title: 'the movie',
            website: '',
            writer: '',
            year: '2019',
          },
        },
        user: {
          profile: {
            user: {
              role: 'Admin',
            },
          },
        },
      }

      expect(utils(state).getByText(/Search result/i)).toBeDefined()
      expect(utils(state).getAllByText(/More details/i)).toBeDefined()
      expect(utils(state).getAllByText(state.search.movie.title)).toBeDefined()
      expect(utils(state).getAllByText(/Rate this movie/i)).toBeDefined()
      expect(utils(state).getAllByText(/Save/i)).toBeDefined()
    })

    it('Warning - Movie already exists', () => {
      const state = {
        movies: {
          movies: [],
        },
        search: {
          loading: false,
          movie: {
            id: 'mId01',
            actors: '',
            awards: '',
            country: '',
            director: '',
            genres: {},
            imdbID: '',
            imdbRating: '',
            language: '',
            metascore: '',
            plot: '',
            poster: 'http://images.com/picture01.jpg',
            production: 'movie company ltd',
            rating: 4,
            ratings: [],
            released: '2019',
            runtime: '120 min',
            title: 'the movie',
            website: '',
            writer: '',
            year: '2019',
            inLibrary: true,
          },
        },
        user: {
          profile: {
            user: {
              role: 'Admin',
            },
          },
        },
      }
      expect(
        utils(state).getByText(/This movie already exists in the library/i),
      ).toBeDefined()
      // utils(state).debug()
    })

    it('Warning - User not allowed to add movies', () => {
      const state = {
        movies: {
          movies: [],
        },
        search: {
          loading: false,
          movie: {
            id: 'mId01',
            actors: '',
            awards: '',
            country: '',
            director: '',
            genres: {},
            imdbID: '',
            imdbRating: '',
            language: '',
            metascore: '',
            plot: '',
            poster: 'http://images.com/picture01.jpg',
            production: 'movie company ltd',
            rating: 4,
            ratings: [],
            released: '2019',
            runtime: '120 min',
            title: 'the movie',
            website: '',
            writer: '',
            year: '2019',
            inLibrary: false,
          },
        },
        user: {
          profile: {
            user: {
              role: 'User',
            },
          },
        },
      }
      expect(
        utils(state).getByText(/Your account is not allowed to add movies/i),
      ).toBeDefined()
      // utils(state).debug()
    })
  })
})
