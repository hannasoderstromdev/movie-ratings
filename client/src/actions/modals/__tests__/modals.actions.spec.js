import uuid from 'uuid/v4'

import modalsTypes from '../modals.types'
import modalsActions from '../modals.actions'

describe('Actions/Modals', () => {
  describe('openModal', () => {
    it(`returns ${
      modalsTypes.OPEN_MODAL
    } with correct payload for confirmation`, () => {
      const id = uuid()
      const type = 'confirmation'

      const content = {
        text: '',
      }
      const item = {
        id,
        type,
        content,
      }

      expect(modalsActions.openModal({ id, type, content })).toEqual({
        type: modalsTypes.OPEN_MODAL,
        payload: { item },
      })
    })

    it(`returns ${
      modalsTypes.OPEN_MODAL
    } with correct payload for movie-details`, () => {
      const id = uuid()
      const type = 'movie-details'

      const content = {
        text: '',
      }
      const item = {
        id,
        type,
        content,
      }

      expect(modalsActions.openModal({ id, type, content })).toEqual({
        type: modalsTypes.OPEN_MODAL,
        payload: { item },
      })
    })
  })

  describe('closeModal', () => {
    it(`returns ${modalsTypes.CLOSE_MODAL} with correct payload`, () => {
      const id = uuid()

      expect(modalsActions.closeModal(id)).toEqual({
        type: modalsTypes.CLOSE_MODAL,
        payload: { id },
      })
    })
  })
})
