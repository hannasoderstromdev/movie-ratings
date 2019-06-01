import React from 'react'
import { render } from '@testing-library/react'

import FullscreenSpinner from '..'
import Theme from '../../../Theme'

describe('Components/Molecules/FullscreenSpinner', () => {
  it('renders', () => {
    const { getByTestId } = render(
      <Theme>
        <FullscreenSpinner />
      </Theme>,
    )
    expect(getByTestId('backdrop').tagName).toBe('DIV')
  })
})
