import React from 'react'
import configureStore from 'redux-mock-store'
import { render } from 'react-testing-library'

import Root from 'components/Root'
import Theme from 'components/Theme'

import MovieHeader from '..'

const mockStore = configureStore([])

describe('Components/Molecules/MovieHeader', () => {
  it('renders', () => {
    const props = {
      id: 'mId01',
      deleteMovie: jest.fn(),
      title: 'The Title',
      year: '1998',
      runtime: '120 min',
      genres: {
        genreId01: { name: 'Drama' },
        genreId02: { name: 'Adventure' },
      },
      rating: 5,
      setRating: jest.fn(),
      showDelete: true,
    }
    const store = mockStore({
      genres: {
        filter: {},
      },
    })
    const { getByText } = render(
      <Root store={store}>
        <Theme>
          <MovieHeader {...props} />
        </Theme>
      </Root>,
    )
    expect(getByText(/Delete/i)).toBeDefined()
    expect(getByText(props.title)).toBeDefined()
    expect(getByText(`${props.year}, ${props.runtime}`)).toBeDefined()
    expect(getByText(props.genres['genreId01'].name)).toBeDefined()
    expect(getByText(props.genres['genreId02'].name)).toBeDefined()
  })
})
