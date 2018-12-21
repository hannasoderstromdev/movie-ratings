import {
  ALERT_SUCCESS,
  ALERT_ERROR,
  ALERT_WARNING,
  ALERT_CLEAR,
  alertSuccessAction,
  alertErrorAction,
  alertWarningAction,
  alertClearAction,
} from '../alerts.actions'

describe('Actions/Alerts', () => {
  describe('alertSuccessAction', () => {
    it(`returns ${ALERT_SUCCESS} and correct payload`, () => {
      const message = 'The message was a success!'
      const action = alertSuccessAction(message)

      expect(action).toEqual({
        type: ALERT_SUCCESS,
        payload: { message },
      })
    })
  })

  describe('alertErrorAction', () => {
    it(`returns ${ALERT_ERROR} and correct payload`, () => {
      const message = 'The thing failed!'
      const action = alertErrorAction(message)

      expect(action).toEqual({
        type: ALERT_ERROR,
        payload: { message },
      })
    })
  })

  describe('alertWarningAction', () => {
    it(`returns ${ALERT_WARNING} and correct payload`, () => {
      const message = 'Warning!'
      const action = alertWarningAction(message)

      expect(action).toEqual({
        type: ALERT_WARNING,
        payload: { message },
      })
    })
  })

  describe('alertClearAction', () => {
    it(`returns ${ALERT_CLEAR}`, () => {
      const action = alertClearAction()

      expect(action).toEqual({
        type: ALERT_CLEAR,
      })
    })
  })
})
