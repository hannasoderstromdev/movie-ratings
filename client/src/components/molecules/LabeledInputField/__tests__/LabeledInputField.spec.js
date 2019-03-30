import React from 'react'
import { render } from 'react-testing-library'
import { axe } from 'jest-axe'

import LabeledInputField from '..'
import Theme from '../../../Theme'

describe('Components/Molecules/LabeledInputField', () => {
  const props = {
    label: 'Label',
    name: 'thing',
    type: 'text',
    onChange: jest.fn(),
    value: '',
    placeholder: 'enter text',
  }

  it('renders', () => {
    const { getByText, getByTestId } = render(
      <Theme>
        <LabeledInputField {...props} />
      </Theme>,
    )
    expect(getByText('Label').tagName).toBe('LABEL')
    expect(getByTestId('input').tagName).toBe('INPUT')
  })

  it('is accessible', () => {
    const { container } = render(
      <Theme>
        <LabeledInputField {...props} />
      </Theme>,
    )
    setTimeout(async () => {
      const results = await axe(container.innerHTML)
      expect(results).toHaveNoViolations()
    }, 50)
  })
})
