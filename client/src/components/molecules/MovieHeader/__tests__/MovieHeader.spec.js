import React from 'react'
import { render } from 'react-testing-library'
import Theme from 'components/Theme'

import MovieHeader from '..'

describe('Components/Molecules/MovieHeader', () => {
  it('renders', () => {
    const props = {
      id: 'mId01',
      deleteMovie: jest.fn(),
      title: 'The Title',
      year: '1998',
      runtime: '120 min',
      genres: ['Drama', 'Adventure'],
      rating: 5,
      setRating: jest.fn(),
      showDelete: true,
    }
    const { getByText } = render(
      <Theme>
        <MovieHeader {...props} />
      </Theme>,
    )
    expect(getByText(/Delete/i)).toBeDefined()
    expect(getByText(props.title)).toBeDefined()
    expect(getByText(`${props.year}, ${props.runtime}`)).toBeDefined()
    expect(getByText(props.genres[0])).toBeDefined()
  })
})
