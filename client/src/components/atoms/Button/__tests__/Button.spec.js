import React from 'react'
import { render, fireEvent } from 'react-testing-library'
import { axe } from 'jest-axe'

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

  it('renders a button', () => {
    const { getByTestId } = render(
      <Theme>
        <Button {...props}>Test Button</Button>
      </Theme>,
    )
    const button = getByTestId('primary-button')
    expect(button).toBeDefined()
    expect(button).toHaveTextContent('Test Button')
  })

  describe('handles props', () => {
    it('type submit', () => {
      props = {
        type: 'submit',
      }
      const { getByTestId } = render(
        <Theme>
          <Button {...props}>Test Button</Button>
        </Theme>,
      )
      const button = getByTestId('primary-button')
      expect(button).toHaveAttribute('type', 'submit')
    })

    it('disabled', () => {
      props = {
        disabled: true,
      }
      const { debug, getByTestId } = render(
        <Theme>
          <Button {...props}>Test Button</Button>
        </Theme>,
      )
      const button = getByTestId('primary-button')
      expect(button).toHaveAttribute('disabled', '')
    })

    it('secondary', () => {
      props = {
        secondary: true,
      }
      const { debug, getByTestId } = render(
        <Theme>
          <Button {...props}>Test Button</Button>
        </Theme>,
      )
      const button = getByTestId('secondary-button')
      expect(button).toBeDefined()
    })

    it('thirdiary', () => {
      props = {
        thirdiary: true,
      }
      const { debug, getByTestId } = render(
        <Theme>
          <Button {...props}>Test Button</Button>
        </Theme>,
      )
      const button = getByTestId('thirdiary-button')
      expect(button).toBeDefined()
    })
  })

  it('runs onClick when clicked', () => {
    const { getByTestId, debug } = render(
      <Theme>
        <Button {...props}>Test Button</Button>
      </Theme>,
    )
    const button = getByTestId('primary-button')
    fireEvent.click(button)
    expect(onClick).toHaveBeenCalledTimes(1)
  })

  it('is accessible', async () => {
    const { container } = render(
      <Theme>
        <Button {...props}>Test Button</Button>
      </Theme>,
    )
    const results = await axe(container.innerHTML)
    expect(results).toHaveNoViolations()
  })
})
