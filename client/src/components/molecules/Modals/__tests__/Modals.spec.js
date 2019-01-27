import React from 'react'
import { render } from 'react-testing-library'
import configureStore from 'redux-mock-store'

import Root from 'components/Root'
import Theme from 'components/Theme'

import Modals from '..'

const mockStore = configureStore([])

let props
let utils

describe('Components/Molecules/Modals', () => {
  beforeEach(() => {
    const initialState = {
      modals: [
        {
          id: 'modalId01',
          type: 'confirmation',
          content: {
            text: 'Do you confirm?',
          },
          onClose: jest.fn(),
          onConfirm: jest.fn(),
        },
        {
          id: 'modalId02',
          type: 'movie-details',
          content: {
            movieId: 'mid01',
          },
          onClose: jest.fn(),
          onConfirm: jest.fn(),
        },
      ],
      movies: {
        movies: [
          {
            id: 'mid01',
            actors: 'Tufsen',
            country: 'Sweden',
            genre: 'Drama',
            director: 'Hanna Söderström',
            language: 'SWE',
            runtime: '120 min',
            year: '2019',
            plot:
              'A cat that suffers from OCD struggles to leave things on the counter alone',
            production: 'Cats and Kitties LTD',
            title: 'CATch me if you can',
            ratings: [],
            released: 'May 1st 2019',
            writer: 'Issy Dragonfly',
            poster: 'http://www.poster.com/image.jpg',
          },
        ],
      },
    }
    const store = mockStore(initialState)

    props = {
      closeModal: jest.fn(),
    }

    utils = render(
      <Root store={store}>
        <Theme>
          <Modals {...props} />
        </Theme>
      </Root>,
    )
  })

  it('renders', () => {
    const modals = utils.getByTestId('modals')
    expect(modals).toBeDefined()
    expect(modals.children.length).toEqual(2)
  })
})
