import React from 'react'
import { render } from 'react-testing-library'

import ErrorMessage from '..'
import Icon from 'components/atoms/Icon'
import Theme from '../../../Theme'

describe('<ErrorMessage />', () => {
  let props

  props = {
    renderIcon: <Icon icon={['fa', 'exclamation-triangle']} />,
  }

  it('renders', () => {
    const textMessage = 'Error Message'
    const { debug, container } = render(
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
