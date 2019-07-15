import React from 'react'
import { render, cleanup } from '@testing-library/react'
import { BrowserRouter as Router } from 'react-router-dom'
import configureStore from 'redux-mock-store'

import Navigation from '..'
import Theme from 'components/Theme'
import Root from 'components/Root'

const mockStore = configureStore()

describe('Components/Molecules/Navigation', () => {
  let store
  let utils

  beforeEach(() => {
    utils = store =>
      render(
        <Root store={store}>
          <Theme>
            <Router>
              <Navigation />
            </Router>
          </Theme>
        </Root>,
      )
  })

  afterEach(() => cleanup())

  it('renders', () => {
    store = mockStore({ user: { loggedIn: false } })
    const component = utils(store)
    expect(component.getByText('Library')).toBeDefined()
    expect(component.getByText('Add')).toBeDefined()
    expect(component.getAllByTestId('icon')).toBeDefined()
  })

  it('renders differently when logged in', () => {
    store = mockStore({ user: { loggedIn: true } })
    const component = utils(store)
    expect(component.getByText('Library')).toBeDefined()
    expect(component.getByText('Add')).toBeDefined()
    expect(component.getAllByTestId('icon')).toBeDefined()
  })
})
