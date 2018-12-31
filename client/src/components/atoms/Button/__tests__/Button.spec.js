import React from 'react'
import { render, cleanup, fireEvent } from 'react-testing-library'

import Button from '..'
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
    const { getByTestId } = render(
      <Theme>
        <Button {...props}>Test Button</Button>
      </Theme>,
    )
    fireEvent.click(getByTestId('primary-button'))
    expect(onClick).toHaveBeenCalledTimes(1)
  })
})
