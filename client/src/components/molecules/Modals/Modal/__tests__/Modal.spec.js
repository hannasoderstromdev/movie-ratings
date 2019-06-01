import React from 'react'
import { render } from '@testing-library/react'
import configureStore from 'redux-mock-store'

import Root from 'components/Root'
import Theme from 'components/Theme'

import Modal from '..'

const mockStore = configureStore([])

let item
let props
let utils

describe('Components/Molecules/Modal', () => {
  beforeEach(() => {
    const initialState = {
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
    item = {
      id: 'mid1',
      type: 'confirmation',
      content: {
        text: 'Do you confirm?',
      },
      onConfirm: jest.fn(),
    }
    props = {
      item,
      onClose: jest.fn(),
    }
    utils = render(
      <Root store={store}>
        <Theme>
          <Modal {...props} />
        </Theme>
      </Root>,
    )
  })

  it('renders confirmation modal', () => {
    const text = utils.getByText('Do you confirm?')
    expect(text).toBeDefined()
    const confirmButton = utils.getByText('Confirm')
    expect(confirmButton).toBeDefined()
    const closeButton = utils.getByText('Close')
    expect(closeButton).toBeDefined()
  })

  it('renders movie-details modal', () => {
    const text = utils.getByText(item.content.text)
    expect(text).toBeDefined()
    const closeButton = utils.getByText('Close')
    expect(closeButton).toBeDefined()
  })
})
