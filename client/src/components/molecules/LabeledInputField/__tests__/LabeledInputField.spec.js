import React from 'react'
import { render } from 'react-testing-library'

import LabeledInputField from '..'
import Theme from '../../../Theme'

describe('<LabeledInputField />', () => {
  it('renders', () => {
    const props = {
      label: 'Label',
      name: 'thing',
      type: 'text',
      onChange: jest.fn(),
      value: '',
      placeholder: 'enter text',
    }
    const { getByText, getByTestId } = render(
      <Theme>
        <LabeledInputField {...props} />
      </Theme>,
    )
    expect(getByText('Label').tagName).toBe('LABEL')
    expect(getByTestId('input').tagName).toBe('INPUT')
  })
})
