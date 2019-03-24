import React from 'react'
import { render, fireEvent, wait } from 'react-testing-library'

import Theme from 'components/Theme'

import FilterByRating from '..'

describe('components/molecules/FilterByRating', () => {
  const filterByRating = jest.fn()
  const props = {
    filterByRating,
  }
  let utils

  beforeEach(() => {
    utils = render(
      <Theme>
        <FilterByRating {...props} />
      </Theme>,
    )
  })

  it('renders closed', () => {
    expect(utils.getByTestId('selected')).toBeDefined()
  })

  it('opens onClick', () => {
    fireEvent.click(utils.getByTestId('selected'))
    expect(utils.getByTestId('dropdown')).toBeDefined()
  })

  it('closes onBlur', async () => {
    fireEvent.click(utils.getByTestId('selected'))

    fireEvent.blur(utils.getByTestId('selected'))

    await wait(() => expect(utils.queryByTestId('dropdown')).toBeNull())
  })

  it('calls filterByRating onClick', () => {
    fireEvent.click(utils.getByTestId('selected'))
    expect(utils.getByTestId('filter-one')).toBeDefined()

    fireEvent.click(utils.getByTestId('filter-one'))
    expect(filterByRating).toHaveBeenCalledWith(1)
  })
})
