import React from 'react'
import { render, cleanup, fireEvent } from 'react-testing-library'

import Button from '../Button'
import Theme from '../../../Theme'

describe('<Button />', () => {
  let onClick
  let props

  beforeEach(() => {
    onClick = jest.fn()
    props = {
      onClick,
      disabled: false,
    }
  })

  afterEach(cleanup)

  it('renders a button', () => {
    const { getByTestId } = render(
      <Theme>
        <Button {...props}>Test Button</Button>
      </Theme>,
    )
    expect(getByTestId('primary-button').tagName).toBe('BUTTON')
  })

  it('runs onClick when clicked', () => {
    props = {
      onClick,
      disabled: true,
    }
    const { getByTestId, debug } = render(
      <Theme>
        <Button {...props}>Test Button</Button>
      </Theme>,
    )
    const button = getByTestId('primary-button')
    fireEvent.click(button)
    expect(onClick).toBeCalled()
    debug()
  })
})
