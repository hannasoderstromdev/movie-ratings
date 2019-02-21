import React from 'react'
import { render } from 'react-testing-library'
import { BrowserRouter as Router } from 'react-router-dom'
import configureStore from 'redux-mock-store'

import Root from 'components/Root'
import Theme from 'components/Theme'

import RateNewMovie from '..'

const mockStore = configureStore()

let utils
let props
let store
let state

describe('Components/Organisms/RateNewMovie', () => {
  beforeEach(() => {
    state = {
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
          genre: '',
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
    }
    store = mockStore(state)
    props = {}
  })

  it('renders without movie', () => {
    state = {
      movies: {
        movies: [],
      },
      search: {
        loading: false,
        movie: null,
      },
    }
    store = mockStore(state)
    utils = render(
      <Root store={store}>
        <Router>
          <Theme>
            <RateNewMovie {...props} />
          </Theme>
        </Router>
      </Root>,
    )

    const searchText = utils.getByText(/Search for a movie to add/i)
    expect(searchText).toBeDefined()
  })

  it('renders with movie', () => {
    utils = render(
      <Root store={store}>
        <Router>
          <Theme>
            <RateNewMovie {...props} />
          </Theme>
        </Router>
      </Root>,
    )

    expect(utils.getByText(/Search result/i)).toBeDefined()
    expect(utils.getByText(/More details/i)).toBeDefined()
    expect(utils.getByText(state.search.movie.title)).toBeDefined()
  })
})
