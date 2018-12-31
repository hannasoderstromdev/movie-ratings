import React from 'react'
import { render, fireEvent, cleanup } from 'react-testing-library'

import Root from 'components/Root'
import { store } from 'helpers/store'
import SearchLibrary from '..'
import Theme from 'components/Theme'

describe('Components/Molecules/SearchLibrary', () => {
  let doOnChange
  let doOnSubmit
  let findMovieByTitle
  let props

  beforeEach(() => {
    doOnChange = jest.fn()
    doOnSubmit = jest.fn()
    findMovieByTitle = jest.fn()

    props = {
      findMovieByTitle,
      doOnChange,
      doOnSubmit,
      name: 'searchfield',
      placeholder: 'search here',
    }
  })

  afterEach(cleanup)

  it('renders', () => {
    const { getByTestId, debug } = render(
      <Root store={store}>
        <Theme>
          <SearchLibrary {...props} />
        </Theme>
      </Root>,
    )

    expect(getByTestId('search-field').children[0].tagName).toBe('INPUT')
    expect(getByTestId('search-field').children[0].type).toBe('search')
    expect(getByTestId('search-button')).toBeDefined()
  })

  it('handles change', () => {
    const { getByTestId, debug } = render(
      <Root store={store}>
        <Theme>
          <SearchLibrary {...props} />
        </Theme>
      </Root>,
    )

    fireEvent.change(getByTestId('search-field').children[0], {
      target: { value: 'A' },
    })
    expect(doOnChange).toHaveBeenCalledTimes(1)
  })

  it('handles submit', () => {
    const { getByTestId, debug } = render(
      <Root store={store}>
        <Theme>
          <SearchLibrary {...props} />
        </Theme>
      </Root>,
    )

    fireEvent.submit(getByTestId('search-field'))
    expect(doOnSubmit).toHaveBeenCalledTimes(1)
  })
})
