import React from 'react'
import { render } from 'react-testing-library'

import Label from '..'
import Theme from '../../../Theme'

describe('<Label />', () => {
  it('renders', () => {
    const props = {}
    const { getByTestId } = render(
      <Theme>
        <Label {...props}>Label</Label>
      </Theme>,
    )
    expect(getByTestId('label').tagName).toBe('LABEL')
    expect(getByTestId('label').innerHTML).toBe('Label')
  })
})
