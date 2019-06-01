import React from 'react'
import { render } from '@testing-library/react'
import { Provider } from 'react-redux'
import configureStore from 'redux-mock-store'

import Theme from 'components/Theme'
import Header from '..'

const mockStore = configureStore()

describe('Components/Molecules/Header', () => {
  it('renders', () => {
    const store = mockStore({
      movies: {
        showSearchLibrary: true,
      },
      user: {
        loggedIn: true,
      },
    })
    const props = {
      toggleLibrarySearch: jest.fn(),
    }
    const { getByTestId } = render(
      <Theme>
        <Provider store={store}>
          <Header {...props} />
        </Provider>
      </Theme>,
    )
    expect(getByTestId('clapper').tagName).toBe('IMG')
    expect(getByTestId('logo').tagName).toBe('IMG')
  })
})
