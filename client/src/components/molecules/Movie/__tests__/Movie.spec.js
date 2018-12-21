import React from 'react'
import { render } from 'react-testing-library'

import Movie from '../index'
import Theme from '../../../Theme'

describe('<Movie />', () => {
  it('renders', () => {
    const props = {
      title: 'Movie Title',
      year: '1998',
      runtime: '128 min',
      director: 'Me',
      actors: 'Me and Someone Else',
      poster: 'http://www.url.com/picture.jpg',
      rating: 4,
      decrease: jest.fn(),
      increase: jest.fn(),
    }
    const { getByAltText, getByText } = render(
      <Theme>
        <Movie {...props} />
      </Theme>,
    )
    expect(getByAltText(props.title).tagName).toBe('IMG')
    expect(getByText(props.title).tagName).toBe('H2')
    expect(getByText(props.year)).toBeDefined()
    expect(getByText(props.runtime)).toBeDefined()
    expect(getByText(`Director: ${props.director}`)).toBeDefined()
    expect(getByText(`Actors: ${props.actors}`)).toBeDefined()
  })
})
