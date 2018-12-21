import React from 'react'
import { render } from 'react-testing-library'

import FullscreenSpinner from '..'
import Theme from '../../../Theme'

describe('<FullscreenSpinner />', () => {
  it('renders', () => {
    const { getByTestId } = render(
      <Theme>
        <FullscreenSpinner />
      </Theme>,
    )
    expect(getByTestId('backdrop').tagName).toBe('DIV')
  })
})
