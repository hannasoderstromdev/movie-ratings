import React from 'react'
import { render } from 'react-testing-library'

import MoviesList from '..'
import Theme from '../../../Theme'
import Root from 'components/Root'
import { store } from 'helpers/store'
import movies from 'mockStore/movies'

describe('Components/Molecules/MoviesList', () => {
  it('renders', () => {
    const props = {
      movies,
    }
    const { container } = render(
      <Root store={store}>
        <Theme>
          <MoviesList {...props} />
        </Theme>
      </Root>,
    )
    expect(container.firstChild.tagName).toBe('DIV')
    expect(container.firstChild.children.length).toBe(2)
  })
})
