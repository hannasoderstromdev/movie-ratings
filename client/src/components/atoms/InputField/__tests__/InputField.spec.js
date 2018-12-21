import React from 'react'
import { render } from 'react-testing-library'

import InputField from '..'
import Theme from '../../../Theme'

describe('<InputField />', () => {
  it('renders', () => {
    const props = {
      name: 'name',
      type: 'text',
      placeholder: 'placeholder',
      value: '',
      onChange: jest.fn(),
    }
    const { getByTestId } = render(
      <Theme>
        <InputField {...props} />
      </Theme>,
    )
    expect(getByTestId('input').tagName).toBe('INPUT')
  })
})
