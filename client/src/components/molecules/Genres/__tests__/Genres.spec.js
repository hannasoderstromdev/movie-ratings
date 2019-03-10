import React from 'react'
import { render } from 'react-testing-library'
import Theme from 'components/Theme'

import Genres from '..'

describe('Components/Molecules/Genres', () => {
  it('renders', () => {
    const props = {
      genres: [
        { _id: 'genreId01', name: 'Drama' },
        { _id: 'genreId02', name: 'Adventure' },
        { _id: 'genreId03', name: 'Sci-Fi' },
      ],
    }
    const utils = render(
      <Theme>
        <Genres {...props} />
      </Theme>,
    )

    expect(utils.getByText(props.genres[0].name)).toBeDefined()
    expect(utils.getByText(props.genres[1].name)).toBeDefined()
    expect(utils.getByText(props.genres[2].name)).toBeDefined()
  })
})
