import React from 'react'
import { render, fireEvent } from '@testing-library/react'

import { store } from 'helpers/store'

import MovieDetails from '../MovieDetails'
import Root from 'components/Root'
import Theme from 'components/Theme'

describe('Components/Molecules/MovieDetails', () => {
  let toggle
  let props
  let utils

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
    utils = render(
      <Root store={store}>
        <Theme>
          <MovieDetails {...props} />
        </Theme>
      </Root>,
    )
  })

  it('renders', () => {
    expect(utils.getByText(props.actors)).toBeDefined()
    expect(utils.getByText(props.plot)).toBeDefined()
    expect(
      utils.getByText(
        `${props.released}, ${props.country} (${props.language})`,
      ),
    ).toBeDefined()
    expect(utils.getByText(props.director)).toBeDefined()
    expect(utils.getByText(props.production)).toBeDefined()
    expect(utils.getByText(props.writer)).toBeDefined()
    expect(utils.getByText(props.ratings[0].Value)).toBeDefined()
    expect(utils.getByText(props.ratings[1].Value)).toBeDefined()
    expect(utils.getByText(props.ratings[2].Value)).toBeDefined()
  })

  it('toggles', () => {
    fireEvent.click(utils.getByTestId('thirdiary-button'))
    expect(toggle).toHaveBeenCalledTimes(1)
  })
})
