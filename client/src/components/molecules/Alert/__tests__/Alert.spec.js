import React from 'react'
import { render, cleanup } from '@testing-library/react'
import { createStore } from 'redux'
import { Provider } from 'react-redux'

import Alert from '..'
import Theme from '../../../Theme'

import reducer from 'reducers/errorHandler/errorHandler.reducer'

describe('Components/Molecules/Alert', () => {
  let initialState
  let store
  let props

  beforeEach(() => {
    props = {
      onClick: jest.fn(),
    }
  })
  afterEach(cleanup)

  it('render type "success"', () => {
    initialState = {
      errorHandler: {
        error: true,
        type: 'success',
        message: 'Success!',
        status: 200,
      },
    }
    store = createStore(reducer, initialState)

    const { getByTestId, getByText } = render(
      <Provider store={store}>
        <Theme>
          <Alert {...props} />
        </Theme>
      </Provider>,
    )
    expect(getByTestId('message').tagName).toBeDefined()
    expect(
      getByText(
        `${initialState.errorHandler.status}: ${initialState.errorHandler.message}`,
      ),
    ).toBeDefined()
  })

  it('render type "danger"', () => {
    initialState = {
      errorHandler: {
        error: true,
        type: 'danger',
        message: 'Danger!',
        status: 500,
      },
    }
    store = createStore(reducer, initialState)

    const { getByTestId, getByText } = render(
      <Provider store={store}>
        <Theme>
          <Alert {...props} />
        </Theme>
      </Provider>,
    )

    expect(getByTestId('message').tagName).toBeDefined()
    expect(
      getByText(
        `${initialState.errorHandler.status}: ${initialState.errorHandler.message}`,
      ),
    ).toBeDefined()
  })

  it('render type "alert"', () => {
    initialState = {
      errorHandler: {
        error: true,
        type: 'alert',
        message: 'Alert!',
        status: 304,
      },
    }
    store = createStore(reducer, initialState)

    const { getByTestId, getByText } = render(
      <Provider store={store}>
        <Theme>
          <Alert {...props} />
        </Theme>
      </Provider>,
    )

    expect(getByTestId('message').tagName).toBeDefined()
    expect(
      getByText(
        `${initialState.errorHandler.status}: ${initialState.errorHandler.message}`,
      ),
    ).toBeDefined()
  })
})
