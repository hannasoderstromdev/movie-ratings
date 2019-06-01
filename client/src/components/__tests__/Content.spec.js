import React from 'react'
import { render, cleanup } from '@testing-library/react'
import { Router } from 'react-router-dom'
import { createMemoryHistory } from 'history'
import configureStore from 'redux-mock-store'
import thunk from 'redux-thunk'

import Theme from 'components/Theme'
import Root from 'components/Root'

import Content from '../Content'

const middlewares = [thunk]
const mockStore = configureStore(middlewares)

describe('Content', () => {
  let history

  const initialState = {
    errorHandler: {
      error: false,
      status: 200,
    },
    genres: {
      loading: false,
      genres: {},
      filter: {},
    },
    movies: {
      movies: [],
      loading: false,
      numberOfItems: 0,
      page: 1,
      limit: 10,
      showSearchLibrary: false,
      genres: [],
      rating: 0,
    },
    user: {
      loggingIn: false,
      loggedIn: false,
      profile: null,
      error: false,
    },
    modals: [],
  }

  const store = mockStore(initialState)

  afterEach(() => cleanup())

  it('renders login screen as default', () => {
    history = createMemoryHistory({ initialEntries: ['/'] })

    const utils = render(
      <Root store={store}>
        <Theme>
          <Router history={history}>
            <Content />
          </Router>
        </Theme>
      </Root>,
    )

    expect(utils.getByTestId('main-header')).toBeInTheDocument()
    expect(utils.getByTestId('main-navigation')).toBeInTheDocument()
    expect(utils.getByTestId('login-screen')).toBeInTheDocument()
  })

  it('handles 404', () => {
    history = createMemoryHistory({ initialEntries: ['/does-not-exist'] })

    const utils = render(
      <Root store={store}>
        <Theme>
          <Router history={history}>
            <Content />
          </Router>
        </Theme>
      </Root>,
    )
    expect(utils.getByTestId('main-header')).toBeInTheDocument()
    expect(utils.getByTestId('main-navigation')).toBeInTheDocument()
    expect(utils.getByTestId('error404-screen')).toBeInTheDocument()
  })

  it('renders library if user is logged in', () => {
    localStorage.setItem('user', JSON.stringify({ token: 'fake token' }))
    history = createMemoryHistory({ initialEntries: ['/'] })
    initialState.isLoggedIn = true

    const utils = render(
      <Root store={store}>
        <Theme>
          <Router history={history}>
            <Content />
          </Router>
        </Theme>
      </Root>,
    )

    expect(utils.getByTestId('main-header')).toBeInTheDocument()
    expect(utils.getByTestId('main-navigation')).toBeInTheDocument()
    setTimeout(async () => {
      await expect(utils.getByTestId('library-screen')).toBeInTheDocument()
    })
    localStorage.clear()
  })
})
