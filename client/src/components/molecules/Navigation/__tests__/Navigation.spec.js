import React from 'react'
import { render } from 'react-testing-library'
import { BrowserRouter as Router } from 'react-router-dom'
import configureStore from 'redux-mock-store'

import Navigation from '..'
import Theme from 'components/Theme'
import Root from 'components/Root'

const mockStore = configureStore()
let store

describe('Components/Molecules/Navigation', () => {
  it('renders', () => {
    store = mockStore({ user: { loggedIn: false } })
    const { getByText, getByTestId } = render(
      <Root store={store}>
        <Theme>
          <Router>
            <Navigation />
          </Router>
        </Theme>
      </Root>,
    )
    expect(getByText('Library')).toBeDefined()
    expect(getByText('Add')).toBeDefined()
    expect(getByText('Login')).toBeDefined()
    expect(getByTestId('icon')).toBeDefined()
  })

  it('renders differently when logged in', () => {
    store = mockStore({ user: { loggedIn: true } })
    const { getByText, getByTestId } = render(
      <Root store={store}>
        <Theme>
          <Router>
            <Navigation />
          </Router>
        </Theme>
      </Root>,
    )
    expect(getByText('Library')).toBeDefined()
    expect(getByText('Add')).toBeDefined()
    expect(getByText('Account')).toBeDefined()
    expect(getByTestId('icon')).toBeDefined()
  })
})
