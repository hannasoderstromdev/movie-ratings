import React from 'react'
import { render, fireEvent, cleanup } from 'react-testing-library'

import MovieDetails from '../MovieDetails'
import Theme from 'components/Theme'

describe('Components/Molecules/MovieDetails', () => {
  let toggle
  let props

  beforeEach(() => {
    toggle = jest.fn()
    props = {
      actors: 'Me and Someone Else',
      plot: '',
      released: 'May 1st 1998',
      country: 'USA',
      director: 'Me',
      language: 'ENG',
      production: 'Xena and Zeus',
      ratings: [
        { Source: '', Value: '' },
        { Source: '', Value: '' },
        { Source: '', Value: '' },
      ],
      isOpen: true,
      toggle,
      writer: 'Someone Else',
    }
  })

  afterEach(cleanup)

  it('renders', () => {
    const { getByText } = render(
      <Theme>
        <MovieDetails {...props} />
      </Theme>,
    )
    expect(getByText(props.actors)).toBeDefined()
    expect(getByText(props.plot)).toBeDefined()
    expect(
      getByText(`${props.released}, ${props.country} (${props.language})`),
    ).toBeDefined()
    expect(getByText(props.director)).toBeDefined()
    expect(getByText(props.production)).toBeDefined()
    expect(getByText(props.writer)).toBeDefined()
    expect(getByText(props.ratings[0].Value)).toBeDefined()
    expect(getByText(props.ratings[1].Value)).toBeDefined()
    expect(getByText(props.ratings[2].Value)).toBeDefined()
  })

  it('toggles', () => {
    const { getByTestId } = render(
      <Theme>
        <MovieDetails {...props} />
      </Theme>,
    )

    fireEvent.click(getByTestId('thirdiary-button'))
    expect(toggle).toHaveBeenCalledTimes(1)
  })
})
