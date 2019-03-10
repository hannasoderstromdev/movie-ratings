import React from 'react'
import configureStore from 'redux-mock-store'
import { render } from 'react-testing-library'

import Root from 'components/Root'
import Theme from 'components/Theme'

import Genres from '..'

const mockStore = configureStore([])

describe('Components/Molecules/Genres', () => {
  it('renders', () => {
    const props = {
      genres: {
        genreId01: { name: 'Drama' },
        genreId02: { name: 'Adventure' },
        genreId03: { name: 'Sci-Fi' },
      },
    }
    const store = mockStore({
      genres: {
        filter: {
          genreId01: { name: 'Action' },
        },
      },
    })
    const utils = render(
      <Root store={store}>
        <Theme>
          <Genres {...props} />
        </Theme>
      </Root>,
    )

    expect(utils.getByText(props.genres['genreId01'].name)).toBeDefined()
    expect(utils.getByText(props.genres['genreId02'].name)).toBeDefined()
    expect(utils.getByText(props.genres['genreId03'].name)).toBeDefined()
  })
})
