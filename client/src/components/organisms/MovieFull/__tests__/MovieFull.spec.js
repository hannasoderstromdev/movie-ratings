import React from 'react'
import { render } from 'react-testing-library'
import configureStore from 'redux-mock-store'

import Root from 'components/Root'
import Theme from 'components/Theme'

import MovieFull from '..'

const mockStore = configureStore([])

describe('Components/Organisms/MovieFull', () => {
  it('renders', () => {
    const initialState = {
      movies: {
        movies: [
          {
            id: 'mid01',
            actors: 'Tufsen',
            country: 'Sweden',
            genre: 'Drama',
            director: 'Hanna Söderström',
            language: 'SWE',
            runtime: '120 min',
            year: '2019',
            plot:
              'A cat that suffers from OCD struggles to leave things on the counter alone',
            production: 'Cats and Kitties LTD',
            title: 'CATch me if you can',
            ratings: [],
            released: 'May 1st 2019',
            writer: 'Issy Dragonfly',
            poster: 'http://www.poster.com/image.jpg',
          },
        ],
      },
      user: {
        profile: {
          user: {
            role: 'User',
          },
        },
      },
    }
    const store = mockStore(initialState)
    const props = {
      movieId: 'mid01',
    }
    const { getByText, getByTestId } = render(
      <Root store={store}>
        <Theme>
          <MovieFull {...props} />
        </Theme>
      </Root>,
    )
    const title = getByText(initialState.movies.movies[0].title)
    expect(title).toBeDefined()
    const wrapper = getByTestId('full-movie')
    expect(wrapper).toBeDefined()
  })
})
