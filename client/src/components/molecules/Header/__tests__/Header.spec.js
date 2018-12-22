import React from 'react'
import { render } from 'react-testing-library'

import Header from '..'
import Theme from '../../../Theme'

describe('Components/Molecules/Header', () => {
  it('renders', () => {
    const { getByText } = render(
      <Theme>
        <Header />
      </Theme>,
    )
    expect(getByText('Movie Ratings').tagName).toBe('HEADER')
  })
})
