import React from 'react'
import { render } from 'react-testing-library'

import Header from '..'
import Theme from '../../../Theme'

describe('Components/Molecules/Header', () => {
  it('renders', () => {
    const { getByTestId } = render(
      <Theme>
        <Header />
      </Theme>,
    )
    expect(getByTestId('clapper').tagName).toBe('IMG')
    expect(getByTestId('logo').tagName).toBe('IMG')
  })
})
