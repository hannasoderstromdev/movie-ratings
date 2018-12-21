import {
  ALERT_SUCCESS,
  ALERT_ERROR,
  ALERT_WARNING,
  ALERT_CLEAR,
} from 'actions/alerts/alerts.actions'

import reducer from '../alerts.reducer'

describe('Reducers/Alerts', () => {
  it(`handles ${ALERT_SUCCESS}`, () => {
    const action = {
      type: ALERT_SUCCESS,
      payload: { message: 'Success message' },
    }
    const expectedState = {
      display: true,
      message: 'Success message',
      type: 'success',
    }
    expect(reducer({}, action)).toEqual(expectedState)
  })

  it(`handles ${ALERT_ERROR}`, () => {
    const action = {
      type: ALERT_ERROR,
      payload: { message: 'Error message' },
    }
    const expectedState = {
      display: true,
      message: 'Error message',
      type: 'danger',
    }
    expect(reducer({}, action)).toEqual(expectedState)
  })

  it(`handles ${ALERT_WARNING}`, () => {
    const action = {
      type: ALERT_WARNING,
      payload: { message: 'Alert message' },
    }
    const expectedState = {
      display: true,
      message: 'Alert message',
      type: 'alert',
    }
    expect(reducer({}, action)).toEqual(expectedState)
  })

  it(`handles ${ALERT_CLEAR}`, () => {
    const action = {
      type: ALERT_CLEAR,
    }
    const expectedState = { display: false, message: '', type: '' }
    expect(reducer({}, action)).toEqual(expectedState)
  })
})
