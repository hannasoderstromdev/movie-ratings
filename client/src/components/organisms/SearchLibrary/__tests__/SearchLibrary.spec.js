import React from 'react'
import { render, fireEvent } from '@testing-library/react'
import configureStore from 'redux-mock-store'
import thunk from 'redux-thunk'

import Root from 'components/Root'
import SearchLibrary from '..'
import Theme from 'components/Theme'

const middlewares = [thunk]
const mockStore = configureStore(middlewares)

const utils = (doOnSubmit = jest.fn()) => {
  const store = mockStore({
    movies: {
      loading: false,
      movies: [],
      error: false,
      numberOfItems: 0,
      limit: 10,
      page: 1,
      showSearchLibrary: true,
      genres: [],
      rating: 0,
    },
  })
  const props = {
    findMovieByTitle: jest.fn(),
    getAllMovies: jest.fn(),
    doOnChange: jest.fn(),
    doOnSubmit,
    name: 'searchfield',
    placeholder: 'search here',
  }

  return render(
    <Root store={store}>
      <Theme>
        <SearchLibrary {...props} />
      </Theme>
    </Root>,
  )
}

describe('Components/Molecules/SearchLibrary', () => {
  describe('renders', () => {
    it('Input-field', () => {
      expect(utils().getByTestId('search-field')).toBeDefined()
      expect(utils().getByTestId('search-field').tagName).toBe('INPUT')
      expect(utils().getByTestId('search-field').type).toBe('search')
    })

    it('Search-button', () => {
      expect(utils().getByTestId('search-button')).toBeDefined()
      expect(utils().getByTestId('search-button').tagName).toBe('BUTTON')
      expect(utils().getByTestId('search-button').type).toBe('submit')
    })
  })

  describe('SearchLibraryField', () => {
    it('handles input', () => {
      const input = utils().getByTestId('search-field')

      expect(input).toBeDefined()
      fireEvent.change(utils().getByTestId('search-field'), {
        target: { value: 'A' },
      })
      expect(input.value).toEqual('A')
    })
  })
})
