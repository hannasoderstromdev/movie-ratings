import React from 'react'
import { render } from 'react-testing-library'

import Theme from 'components/Theme'

import Modal from '..'

describe('Components/Molecules/Modal', () => {
  it('renders confirmation modal', () => {
    const item = {
      id: 'mid1',
      type: 'confirmation',
      content: {
        text: 'Do you confirm?',
      },
    }
    const props = {
      item,
      onClose: jest.fn(),
    }
    const { getByText } = render(
      <Theme>
        <Modal {...props} />
      </Theme>,
    )
    const text = getByText('Do you confirm?')
    expect(text).toBeDefined()
    const confirmButton = getByText('Confirm')
    expect(confirmButton).toBeDefined()
    const closeButton = getByText('Close')
    expect(closeButton).toBeDefined()
  })

  it('renders movie-details modal', () => {
    const item = {
      id: 'mid1',
      type: 'movie-details',
      content: {
        text: 'Awesome movie',
      },
    }
    const props = {
      item,
      onClose: jest.fn(),
    }
    const { getByText } = render(
      <Theme>
        <Modal {...props} />
      </Theme>,
    )
    const text = getByText(item.content.text)
    expect(text).toBeDefined()
    const closeButton = getByText('Close')
    expect(closeButton).toBeDefined()
  })
})
