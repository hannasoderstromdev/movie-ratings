import React from 'react'
import { render } from 'react-testing-library'

import MoviesList from '..'
import Theme from '../../../Theme'

describe('Components/Molecules/MoviesList', () => {
  it('renders', () => {
    const props = {
      movies: [
        {
          id: 'mid01',
          title: 'Movie Title',
          year: '1998',
          runtime: '128 min',
          director: 'Me',
          actors: 'Me and Someone Else',
          poster: 'http://www.url.com/picture.jpg',
          rating: 4,
          imdbID: 'tt001',
          genre: 'Action',
          country: 'USA',
          language: 'ENG',
          plot: 'A story about something',
          production: 'Dogs Inc',
          ratings: [
            { Source: '', Value: '' },
            { Source: '', Value: '' },
            { Source: '', Value: '' },
          ],
          released: 'May 1st 1998',
          writer: 'Someone Else',
        },
        {
          id: 'mid02',
          title: 'Movie Title',
          year: '1998',
          runtime: '128 min',
          director: 'Me',
          actors: 'Me and Someone Else',
          poster: 'http://www.url.com/picture.jpg',
          rating: 4,
          imdbID: 'tt002',
          genre: 'Action',
          country: 'USA',
          language: 'ENG',
          plot: 'A story about something',
          production: 'Dogs Inc',
          ratings: [
            { Source: '', Value: '' },
            { Source: '', Value: '' },
            { Source: '', Value: '' },
          ],
          released: 'May 1st 1998',
          writer: 'Someone Else',
        },
      ],
    }
    const { container } = render(
      <Theme>
        <MoviesList {...props} />
      </Theme>,
    )
    expect(container.firstChild.tagName).toBe('DIV')
    expect(container.firstChild.children.length).toBe(2)
  })
})
