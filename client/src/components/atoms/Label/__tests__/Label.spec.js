import React from 'react'
import { render, cleanup } from 'react-testing-library'

import Label from '..'
import Theme from '../../../Theme'

afterEach(cleanup)

describe('<Label />', () => {
  it('renders', () => {
    const props = {
      htmlFor: 'thing',
    }
    const { getByTestId, debug } = render(
      <Theme>
        <Label {...props}>Label</Label>
      </Theme>,
    )
    const label = getByTestId('label')
    expect(label.tagName).toBe('LABEL')
    expect(label.innerHTML).toBe('Label')
    expect(label).toHaveAttribute('for', 'thing')
  })
})
