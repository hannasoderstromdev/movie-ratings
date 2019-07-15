import React from 'react'
import { render } from '@testing-library/react'

import Icon from '..'
import Theme from '../../../Theme'

describe('<Icon />', () => {
  it('renders', () => {
    const props = {
      icon: ['fas', 'times'],
    }
    const { getByTestId } = render(
      <Theme>
        <Icon {...props} />
      </Theme>,
    )
    expect(getByTestId('icon').tagName).toBe('svg')
  })
})
