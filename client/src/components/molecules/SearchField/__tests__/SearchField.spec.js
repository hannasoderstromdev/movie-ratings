import React from 'react'
import { render, fireEvent } from 'react-testing-library'

import SearchField from '..'
import Theme from 'components/Theme'

describe('Components/Molecules/SearchField', () => {
  const onChange = jest.fn()
  const props = {
    onChange,
    name: 'searchfield',
  }

  it('renders', () => {
    const { getByTestId } = render(
      <Theme>
        <SearchField {...props} />
      </Theme>,
    )
    expect(getByTestId('searchfield').tagName).toBe('INPUT')
    expect(getByTestId('searchfield').type).toBe('search')
  })

  it('handles change', () => {
    const { getByTestId } = render(
      <Theme>
        <SearchField {...props} />
      </Theme>,
    )
    fireEvent.change(getByTestId('searchfield'), { target: { value: 'a' } })
    expect(onChange).toHaveBeenCalledTimes(1)
  })
})
