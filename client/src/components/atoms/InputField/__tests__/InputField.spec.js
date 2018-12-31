import React from 'react'
import { render, cleanup, fireEvent } from 'react-testing-library'

import InputField from '..'
import Theme from '../../../Theme'

describe('<InputField />', () => {
  let onChange
  let props

  beforeEach(() => {
    onChange = jest.fn()
    props = {
      name: 'name',
      type: 'text',
      placeholder: 'placeholder',
      value: '',
      onChange,
    }
  })

  afterEach(cleanup)

  it('renders', () => {
    const { getByTestId } = render(
      <Theme>
        <InputField {...props} />
      </Theme>,
    )
    expect(getByTestId('input').tagName).toBe('INPUT')
  })

  it('handles input', () => {
    const { getByTestId } = render(
      <Theme>
        <InputField {...props} />
      </Theme>,
    )
    fireEvent.change(getByTestId('input'), { target: { value: 'A' } })
    expect(onChange).toHaveBeenCalledTimes(1)
  })
})
