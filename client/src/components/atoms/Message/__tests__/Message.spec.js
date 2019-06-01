import React from 'react'
import { render } from '@testing-library/react'

import Theme from 'components/Theme'

import Message from '..'

describe('Components/Atoms/Message', () => {
  it('renders', () => {
    const message = 'The content'
    const { getByText } = render(
      <Theme>
        <Message>{message}</Message>
      </Theme>,
    )
    expect(getByText(message)).toBeDefined()
  })
})
