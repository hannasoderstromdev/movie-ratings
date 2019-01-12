import React from 'react'
import { render } from 'react-testing-library'

import Theme from 'components/Theme'
import ErrorBoundary from '../ErrorBoundary'

function Bomb({ shouldThrow }) {
  if (shouldThrow) {
    throw new Error('💣')
  } else {
    return null
  }
}

describe('hoc/<ErrorBoundary />', () => {
  beforeEach(() => {
    jest.spyOn(console, 'error').mockImplementation(() => {})
  })

  afterEach(() => {
    console.error.mockRestore()
  })

  it('catches errors', () => {
    const { rerender, container } = render(
      <Theme>
        <ErrorBoundary>
          <Bomb />
        </ErrorBoundary>
      </Theme>,
    )

    rerender(
      <Theme>
        <ErrorBoundary>
          <Bomb shouldThrow={true} />
        </ErrorBoundary>
      </Theme>,
    )

    expect(container).toHaveTextContent('Oups, something went wrong :(')
    expect(console.error).toHaveBeenCalledTimes(2)
  })
})
