import React from 'react'
import { render } from '@testing-library/react'

import MovieTile from '..'

describe('Component/Molecules/MovieTile', () => {
  it('renders', () => {
    const props = {
      poster: 'http://images.com/picture.jpg',
      rating: 4,
      openFullMovie: jest.fn(),
    }
    const { getByTestId } = render(<MovieTile {...props} />)
    expect(getByTestId('movie-tile')).toBeDefined()
    expect(getByTestId('rating').children.length).toEqual(5)
  })
})
