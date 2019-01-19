import React from 'react'
import { render } from 'react-testing-library'
import configureStore from 'redux-mock-store'

import Root from 'components/Root'
import Theme from 'components/Theme'

import Modals from '..'

const mockStore = configureStore([])
const initialState = {
  modals: [
    {
      id: 'mid1',
      type: 'confirmation',
      content: {
        text: 'Do you confirm?',
      },
    },
  ],
}

describe('Components/Molecules/Modals', () => {
  it('renders', () => {
    const store = mockStore(initialState)
    const { getByTestId } = render(
      <Root store={store}>
        <Theme>
          <Modals />
        </Theme>
      </Root>,
    )
    const modals = getByTestId('modals')
    expect(modals).toBeDefined()
    expect(modals.children.length).toEqual(1)
  })
})
