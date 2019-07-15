import React from 'react'
import { render } from '@testing-library/react'

import ErrorMessage from '..'
import Icon from 'components/atoms/Icon'
import Theme from '../../../Theme'

describe('<ErrorMessage />', () => {
  const props = {
    renderIcon: <Icon icon={['fa', 'exclamation-triangle']} />,
  }

  it('renders', () => {
    const textMessage = 'Error Message'
    const { container } = render(
      <Theme>
        <ErrorMessage {...props}>{textMessage}</ErrorMessage>
      </Theme>,
    )
    const errorMessage = container.children[0]

    // debug()
    expect(errorMessage).toBeDefined()
    expect(errorMessage).toHaveTextContent(textMessage)
    // test that icon renders
  })
})
