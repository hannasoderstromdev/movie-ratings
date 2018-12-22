import React from 'react'
import { render } from 'react-testing-library'
import { BrowserRouter as Router } from 'react-router-dom'

import Navigation from '..'
import Theme from '../../../Theme'

describe('Components/Molecules/Navigation', () => {
  it('renders', () => {
    const props = {}
    const { getByText } = render(
      <Theme>
        <Router>
          <Navigation {...props} />
        </Router>
      </Theme>,
    )
    expect(getByText('Home').tagName).toBe('A')
    expect(getByText('New').tagName).toBe('A')
    expect(getByText('Login').tagName).toBe('A')
    // TODO: find a way to check for the settings icon
  })
})
