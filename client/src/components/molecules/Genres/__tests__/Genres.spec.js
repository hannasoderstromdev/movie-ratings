import React from 'react'
import { render } from 'react-testing-library'
import Theme from 'components/Theme'

import Genres from '..'

describe('Components/Molecules/Genres', () => {
  it('renders', () => {
    const props = {
      genres: ['Drama', 'Adventure', 'Sci-Fi'],
    }
    const utils = render(
      <Theme>
        <Genres {...props} />
      </Theme>,
    )

    expect(utils.getByText(props.genres[0])).toBeDefined()
    expect(utils.getByText(props.genres[1])).toBeDefined()
    expect(utils.getByText(props.genres[2])).toBeDefined()
  })
})
