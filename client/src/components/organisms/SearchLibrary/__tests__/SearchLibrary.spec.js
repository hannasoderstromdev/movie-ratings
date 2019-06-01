import React from 'react'
import { render, fireEvent, cleanup } from '@testing-library/react'
import configureStore from 'redux-mock-store'
import thunk from 'redux-thunk'

import Root from 'components/Root'
import SearchLibrary from '..'
import Theme from 'components/Theme'

const middlewares = [thunk]
const mockStore = configureStore(middlewares)

let utils

describe('Components/Molecules/SearchLibrary', () => {
  describe('renders', () => {
    beforeEach(() => {
      utils = (doOnSubmit = jest.fn()) => {
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
    })

    afterEach(() => cleanup())

    it('Input-field', () => {
      const component = utils()
      expect(component.getByTestId('search-field')).toBeDefined()
      expect(component.getByTestId('search-field').tagName).toBe('INPUT')
      expect(component.getByTestId('search-field').type).toBe('search')
    })

    it('Search-button', () => {
      const component = utils()

      expect(component.getByTestId('search-button')).toBeDefined()
      expect(component.getByTestId('search-button').tagName).toBe('BUTTON')
      expect(component.getByTestId('search-button').type).toBe('submit')
    })
  })

  describe('SearchLibraryField', () => {
    it('handles input', () => {
      const component = utils()

      const input = component.getByTestId('search-field')

      expect(input).toBeDefined()
      fireEvent.change(component.getByTestId('search-field'), {
        target: { value: 'A' },
      })
      expect(input.value).toEqual('A')
    })
  })
})
