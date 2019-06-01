import React from 'react'
import { render } from '@testing-library/react'

import Theme from '../../../Theme'
import Spinner from '..'

describe('<Spinner />', () => {
  it('renders', () => {
    const { getByTestId } = render(
      <Theme>
        <Spinner />
      </Theme>,
    )
    expect(getByTestId('spinner').tagName).toBe('DIV')
  })
})
