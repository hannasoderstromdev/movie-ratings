import React from 'react'
import { render } from 'react-testing-library'

import Movie from '../index'
import Theme from '../../../Theme'

describe('Components/Molecules/Movie', () => {
  it('renders', () => {
    const toggleFullMovie = jest.fn()
    const toggleDetails = jest.fn()
    const props = {
      id: 'movieid01',
      country: 'USA',
      genre: 'Action',
      language: 'ENG',
      title: 'Movie Title',
      year: '1998',
      runtime: '128 min',
      actors: 'Me and Someone Else',
      director: 'Me',
      plot: '',
      poster: 'http://www.url.com/picture.jpg',
      production: 'Xena and Zeus',
      rating: 4,
      ratings: [
        { Source: '', Value: '' },
        { Source: '', Value: '' },
        { Source: '', Value: '' },
      ],
      released: 'May 1st 1998',
      writer: 'Someone Else',
      toggleFullMovie,
      toggleDetails,
    }
    const { getByAltText, getByText, debug } = render(
      <Theme>
        <Movie {...props} />
      </Theme>,
    )

    expect(getByAltText(props.title).tagName).toBe('IMG')
    expect(getByText(props.title).tagName).toBe('H2')
    expect(getByText(`${props.year}, ${props.runtime}`)).toBeDefined()
  })
})