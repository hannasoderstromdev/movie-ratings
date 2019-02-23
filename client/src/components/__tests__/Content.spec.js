import React from 'react'
import { render } from 'react-testing-library'

import { Router } from 'react-router-dom'
import { createMemoryHistory } from 'history'
import configureStore from 'redux-mock-store'
import thunk from 'redux-thunk'

import Theme from 'components/Theme'
import Root from 'components/Root'

import Content from '../Content'

describe('Content', () => {
  const middlewares = [thunk]
  const mockStore = configureStore(middlewares)
  let store
  let initialState

  beforeEach(() => {
    initialState = {
      errorHandler: {
        error: false,
        status: 200,
      },
      movies: {
        movies: [],
        loading: false,
        numberOfItems: 0,
        page: 1,
        limit: 10,
        showSearchLibrary: false,
      },
      user: {
        loggingIn: false,
        loggedIn: false,
        profile: null,
        error: false,
      },
      modals: [],
    }
  })

  it('renders login screen as default', () => {
    const history = createMemoryHistory({ initialEntries: ['/'] })
    store = mockStore(initialState)
    const { getByTestId } = render(
      <Root store={store}>
        <Theme>
          <Router history={history}>
            <Content />
          </Router>
        </Theme>
      </Root>,
    )
    expect(getByTestId('main-header')).toBeInTheDocument()
    expect(getByTestId('main-navigation')).toBeInTheDocument()
    expect(getByTestId('login-screen')).toBeInTheDocument()
  })

  it('handles 404', () => {
    const history = createMemoryHistory({ initialEntries: ['/does-not-exist'] })
    store = mockStore(initialState)
    const { getByTestId } = render(
      <Root store={store}>
        <Theme>
          <Router history={history}>
            <Content />
          </Router>
        </Theme>
      </Root>,
    )
    expect(getByTestId('main-header')).toBeInTheDocument()
    expect(getByTestId('main-navigation')).toBeInTheDocument()
    expect(getByTestId('error404-screen')).toBeInTheDocument()
  })

  it('renders library if user is logged in', () => {
    localStorage.setItem('user', JSON.stringify({ token: 'fake token' }))
    const history = createMemoryHistory({ initialEntries: ['/'] })
    initialState.isLoggedIn = true

    store = mockStore(initialState)
    const { getByTestId } = render(
      <Root store={store}>
        <Theme>
          <Router history={history}>
            <Content />
          </Router>
        </Theme>
      </Root>,
    )
    expect(getByTestId('main-header')).toBeInTheDocument()
    expect(getByTestId('main-navigation')).toBeInTheDocument()
    expect(getByTestId('library-screen')).toBeInTheDocument()
    localStorage.clear()
  })
})
