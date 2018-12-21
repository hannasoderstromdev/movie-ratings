import React from 'react'
import { render } from 'react-testing-library'

import MoviesList from '..'
import Theme from '../../../Theme'

describe('<MoviesList />', () => {
  it('renders', () => {
    const props = {
      movies: [
        {
          title: 'Movie Title',
          year: '1998',
          runtime: '128 min',
          director: 'Me',
          actors: 'Me and Someone Else',
          poster: 'http://www.url.com/picture.jpg',
          rating: 4,
          imdbID: 'tt001',
        },
        {
          title: 'Movie Title',
          year: '1998',
          runtime: '128 min',
          director: 'Me',
          actors: 'Me and Someone Else',
          poster: 'http://www.url.com/picture.jpg',
          rating: 4,
          imdbID: 'tt002',
        },
      ],
    }
    const { container, getByTestId, debug } = render(
      <Theme>
        <MoviesList {...props} />
      </Theme>,
    )
    expect(container.firstChild.tagName).toBe('ARTICLE')
  })
})
