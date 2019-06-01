import React from 'react'
import configureStore from 'redux-mock-store'

import { render } from '@testing-library/react'

import Root from 'components/Root'
import Theme from 'components/Theme'

import Genre from '..'

const mockStore = configureStore([])

const utils = props => {
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

describe('Components/Molecules/Genre', () => {
  describe('renders', () => {
    it('selected', () => {
      const props = {
        id: 'genreId01',
        name: 'Action',
      }
      expect(utils(props).getByText('Action')).toBeDefined()
      expect(utils(props).getByTestId('minus')).toBeDefined()
    })
    it('not selected', () => {
      const props = {
        id: 'genreId02',
        name: 'Drama',
      }
      expect(utils(props).getByText('Drama')).toBeDefined()
      expect(utils(props).getByTestId('plus')).toBeDefined()
    })
  })
})
