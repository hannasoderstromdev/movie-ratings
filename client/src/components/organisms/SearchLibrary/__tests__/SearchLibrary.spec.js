import React from 'react'
import { render, fireEvent } from 'react-testing-library'

import Root from 'components/Root'
import { store } from 'helpers/store'
import SearchLibrary from '..'
import Theme from 'components/Theme'

describe('Components/Molecules/SearchLibrary', () => {
  let doOnChange
  let doOnSubmit
  let findMovieByTitle
  let props

  doOnChange = jest.fn()
  doOnSubmit = jest.fn()
  findMovieByTitle = jest.fn()

  beforeEach(() => {
    props = {
      findMovieByTitle,
      doOnChange,
      doOnSubmit,
      name: 'searchfield',
      placeholder: 'search here',
    }
  })

  it('renders', () => {
    const { getByTestId } = render(
      <Root store={store}>
        <Theme>
          <SearchLibrary {...props} />
        </Theme>
      </Root>,
    )

    expect(getByTestId('search-field')).toBeDefined()
    expect(getByTestId('search-field').tagName).toBe('INPUT')
    expect(getByTestId('search-field').type).toBe('search')
    expect(getByTestId('search-button')).toBeDefined()
    expect(getByTestId('search-button').tagName).toBe('BUTTON')
    expect(getByTestId('search-button').type).toBe('submit')
  })

  xit('handles change', () => {
    const { getByTestId, debug } = render(
      <Root store={store}>
        <Theme>
          <SearchLibrary {...props} />
        </Theme>
      </Root>,
    )

    const input = getByTestId('search-field')
    expect(input).toBeDefined()

    fireEvent.change(input, {
      target: { name: 'title', value: 'A' },
    })
    expect(doOnChange).toHaveBeenCalledTimes(1)
  })

  xit('handles submit', () => {
    const { getByTestId, debug } = render(
      <Root store={store}>
        <Theme>
          <SearchLibrary {...props} />
        </Theme>
      </Root>,
    )

    debug()
    const button = getByTestId('search-button')
    expect(button).toBeDefined()
    fireEvent.click(button)
    expect(doOnSubmit).toHaveBeenCalledTimes(1)
  })
})
