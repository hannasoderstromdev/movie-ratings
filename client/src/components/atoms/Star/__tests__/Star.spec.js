import React from 'react'
import { render } from 'react-testing-library'

import Star from '..'

describe('Components/Molecules/Star', () => {
  const props = {
    isSelected: true,
    small: true,
  }

  it('renders', () => {
    const { getByTestId } = render(<Star {...props} />)
    expect(getByTestId('icon').tagName).toBe('svg')
  })
})
