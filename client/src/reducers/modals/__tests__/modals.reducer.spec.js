import uuid from 'uuid/v4'

import modalsTypes from 'actions/modals/modals.types'

import reducer from '../modals.reducer'

describe('Reducers/Modals', () => {
  const id01 = uuid()
  const id02 = uuid()
  const initialState = [
    {
      id: id01,
      type: 'confirmation',
      content: {
        text: 'Do you confirm?',
      },
    },
    {
      id: id02,
      type: 'movie-details',
      content: {
        text: 'This movie is awesome',
      },
    },
  ]

  it(`handles ${modalsTypes.OPEN_MODAL}`, () => {
    const id = uuid()
    const type = 'confirmation'
    const content = {
      text: 'Do you still confirm?',
    }

    const action = {
      type: modalsTypes.OPEN_MODAL,
      payload: { item: { id, type, content } },
    }
    const expectedState = [
      ...initialState,
      {
        id,
        type,
        content,
      },
    ]
    expect(reducer(initialState, action)).toEqual(expectedState)
  })

  it(`handles ${modalsTypes.CLOSE_MODAL}`, () => {
    const id = id02
    const action = {
      type: modalsTypes.CLOSE_MODAL,
      payload: { id },
    }
    const expectedState = [initialState[0]]

    expect(reducer(initialState, action)).toEqual(expectedState)
  })
})
