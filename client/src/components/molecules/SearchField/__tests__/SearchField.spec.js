import React from 'react'
import { render, fireEvent, cleanup } from '@testing-library/react'

import SearchField from '..'
import Theme from 'components/Theme'

describe('Components/Molecules/SearchField', () => {
  const onChange = jest.fn()
  const props = {
    onChange,
    name: 'searchfield',
  }

  let utils

  beforeEach(() => {
    utils = render(
      <Theme>
        <SearchField {...props} />
      </Theme>,
    )
  })

  afterEach(() => cleanup())

  it('renders', () => {
    expect(utils.getByTestId('searchfield').tagName).toBe('INPUT')
    expect(utils.getByTestId('searchfield').type).toBe('search')
  })

  it('handles change', () => {
    fireEvent.change(utils.getByTestId('searchfield'), {
      target: { value: 'a' },
    })
    expect(onChange).toHaveBeenCalledTimes(1)
  })
})
