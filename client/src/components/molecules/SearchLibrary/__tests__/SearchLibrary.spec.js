import React from 'react'
import { render, fireEvent } from 'react-testing-library'

import SearchLibrary from '..'
import Theme from '../../../Theme'

describe('Components/Molecules/SearchLibrary', () => {
  const onChange = jest.fn()
  const onSubmit = jest.fn()

  const props = {
    onChange,
    onSubmit,
    name: 'searchfield',
    placeholder: 'search here',
  }
  const { getByTestId, getByText, debug } = render(
    <Theme>
      <SearchLibrary {...props} />
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

  it('handles submit', () => {
    fireEvent.click(getByText('Search'))
    expect(onSubmit).toHaveBeenCalledTimes(1)
  })
})
