import React from 'react'
import configureStore from 'redux-mock-store'

import { render } from 'react-testing-library'

import Root from 'components/Root'
import Theme from 'components/Theme'

import MovieRow from '..'

const mockStore = configureStore([])

describe('Components/Molecules/MovieRow', () => {
  it('renders', () => {
    const props = {
      genres: { genreId01: { name: 'Drama' } },
      id: 'mId01',
      openFullMovie: jest.fn(),
      poster: 'http://pictures.com/image.jpg',
      rating: 3,
      runtime: '120 min',
      setRating: jest.fn(),
      title: 'The Title',
      year: '1999',
    }
    const store = mockStore({
      genres: {
        genres: {
          genreId01: { name: 'Drama' },
        },
        filter: {},
      },
    })
    const { getByText, getByAltText, getByTestId } = render(
      <Root store={store}>
        <Theme>
          <MovieRow {...props} />
        </Theme>
      </Root>,
    )
    expect(getByText(props.title)).toBeDefined()
    expect(getByText(props.year)).toBeDefined()
    expect(getByText(props.genres['genreId01'].name)).toBeDefined()
    expect(getByAltText(props.title)).toBeDefined()
    expect(getByTestId('rating').children.length).toEqual(6)
  })
})
