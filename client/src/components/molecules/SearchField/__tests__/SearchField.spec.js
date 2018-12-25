import React from 'react'
import { render, fireEvent } from 'react-testing-library'

import SearchField from '..'
import Theme from '../../../Theme'

describe('Components/Molecules/SearchField', () => {
  const onChange = jest.fn()
  const props = {
    onChange,
    name: 'searchfield',
  }
  const { getByTestId, getByText } = render(
    <Theme>
      <SearchField {...props} />
    </Theme>,
  )

  it('renders', () => {
    expect(getByTestId('searchfield').tagName).toBe('INPUT')
    expect(getByTestId('searchfield').type).toBe('search')
    expect(getByText('Search')).toBeDefined()
  })

  it('handles change', () => {
    fireEvent.change(getByTestId('searchfield'), { target: { value: 'a' } })
    expect(onChange).toHaveBeenCalledTimes(1)
  })
})
