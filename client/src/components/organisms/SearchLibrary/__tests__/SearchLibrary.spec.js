import React from 'react'
import { render, fireEvent } from 'react-testing-library'

import Root from 'components/Root'
import { store } from 'helpers/store'
import SearchLibrary from '..'
import Theme from '../../../Theme'

describe('Components/Molecules/SearchLibrary', () => {
  const doOnChange = jest.fn()
  const doOnSubmit = jest.fn()
  const findMovieByTitle = jest.fn()

  const props = {
    findMovieByTitle,
    doOnChange,
    doOnSubmit,
    name: 'searchfield',
    placeholder: 'search here',
  }
  const { getByTestId, getByText, debug } = render(
    <Root store={store}>
      <Theme>
        <SearchLibrary {...props} />
      </Theme>
    </Root>,
  )

  it('renders', () => {
    expect(getByTestId('searchfield').tagName).toBe('INPUT')
    expect(getByTestId('searchfield').type).toBe('search')
    expect(getByTestId('searchbutton')).toBeDefined()
  })

  it('handles change', () => {
    fireEvent.change(getByTestId('searchfield'), { target: { value: 'a' } })
    expect(doOnChange).toHaveBeenCalledTimes(1)
  })

  it('handles submit', () => {
    fireEvent.click(getByTestId('searchbutton'))
    expect(findMovieByTitle).toHaveBeenCalledTimes(1)
  })
})
