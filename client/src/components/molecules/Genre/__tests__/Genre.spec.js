import React from 'react'
import configureStore from 'redux-mock-store'

import { render, cleanup } from '@testing-library/react'

import Root from 'components/Root'
import Theme from 'components/Theme'

import Genre from '..'

const mockStore = configureStore([])
let utils

describe('Components/Molecules/Genre', () => {
  beforeEach(() => {
    utils = props => {
      const store = mockStore({
        genres: {
          filter: {
            genreId01: { name: 'Action' },
          },
        },
      })

      return render(
        <Root store={store}>
          <Theme>
            <Genre {...props} />
          </Theme>
        </Root>,
      )
    }
  })

  afterEach(() => cleanup())

  it('renders selected', () => {
    const props = {
      id: 'genreId01',
      name: 'Action',
    }
    const component = utils(props)
    expect(component.getByText('Action')).toBeDefined()
    expect(component.getByTestId('minus')).toBeDefined()
  })
  it('renders not selected', () => {
    const props = {
      id: 'genreId02',
      name: 'Drama',
    }
    const component = utils(props)
    expect(component.getByText('Drama')).toBeDefined()
    expect(component.getByTestId('plus')).toBeDefined()
  })
})
