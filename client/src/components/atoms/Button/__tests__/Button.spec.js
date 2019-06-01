import React from 'react'
import { render, fireEvent, cleanup } from '@testing-library/react'
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

  afterEach(() => cleanup())

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
      const { getByTestId } = render(
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
      const { getByTestId } = render(
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
      const { getByTestId } = render(
        <Theme>
          <Button {...props}>Test Button</Button>
        </Theme>,
      )
      const button = getByTestId('thirdiary-button')
      expect(button).toBeDefined()
    })
  })

  it('runs onClick when clicked', () => {
    const { getByTestId } = render(
      <Theme>
        <Button {...props}>Test Button</Button>
      </Theme>,
    )
    const button = getByTestId('primary-button')
    fireEvent.click(button)
    expect(onClick).toHaveBeenCalledTimes(1)
  })

  it('is accessible', () => {
    const { container } = render(
      <Theme>
        <Button {...props}>Test Button</Button>
      </Theme>,
    )
    setTimeout(async () => {
      const results = await axe(container.innerHTML)
      expect(results).toHaveNoViolations()
    }, 50)
  })
})
