import React from 'react'
import { render } from 'react-testing-library'
import { createStore } from 'redux'
import { Provider } from 'react-redux'

import Alert from '..'
import Theme from '../../../Theme'

import reducer from 'reducers/alerts/alerts.reducer'

describe('Components/Molecules/Alert', () => {
  let initialState
  let store

  beforeEach(() => {})

  it('render type "success"', () => {
    initialState = {
      alerts: {
        display: true,
        type: 'success',
        message: 'Success!',
      },
    }

    store = createStore(reducer, initialState)
    const props = {
      onClick: jest.fn(),
    }
    const { getByText } = render(
      <Provider store={store}>
        <Theme>
          <Alert {...props} />
        </Theme>
      </Provider>,
    )

    expect(getByText('Success!').tagName).toBe('SPAN')
  })

  it('render type "danger"', () => {
    initialState = {
      alerts: {
        display: true,
        type: 'danger',
        message: 'Danger!',
      },
    }

    store = createStore(reducer, initialState)
    const props = {
      onClick: jest.fn(),
    }
    const { getByText } = render(
      <Provider store={store}>
        <Theme>
          <Alert {...props} />
        </Theme>
      </Provider>,
    )

    expect(getByText('Danger!').tagName).toBe('SPAN')
  })

  it('render type "alert"', () => {
    initialState = {
      alerts: {
        display: true,
        type: 'alert',
        message: 'Alert!',
      },
    }

    store = createStore(reducer, initialState)
    const props = {
      onClick: jest.fn(),
    }
    const { getByText } = render(
      <Provider store={store}>
        <Theme>
          <Alert {...props} />
        </Theme>
      </Provider>,
    )

    expect(getByText('Alert!').tagName).toBe('SPAN')
  })
})
