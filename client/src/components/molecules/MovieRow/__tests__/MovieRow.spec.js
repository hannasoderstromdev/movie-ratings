import React from 'react'
import { render } from 'react-testing-library'

import Theme from 'components/Theme'

import MovieRow from '..'

describe('Components/Molecules/MovieRow', () => {
  it('renders', () => {
    const props = {
      genre: 'drama',
      id: 'mId01',
      openFullMovie: jest.fn(),
      poster: 'http://pictures.com/image.jpg',
      rating: 3,
      runtime: '120 min',
      setRating: jest.fn(),
      title: 'The Title',
      year: '1999',
    }
    const { getByText, getByAltText, getByTestId } = render(
      <Theme>
        <MovieRow {...props} />
      </Theme>,
    )

    expect(getByText(props.title)).toBeDefined()
    expect(getByText(`${props.year}, ${props.runtime}`)).toBeDefined()
    expect(getByText(props.genre)).toBeDefined()
    expect(getByAltText(props.title)).toBeDefined()
    expect(getByTestId('rating').children.length).toEqual(6)
  })
})
