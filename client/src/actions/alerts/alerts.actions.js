/**
 * Action Constants
 */

export const ALERT_SUCCESS = 'ALERT_SUCCESS'
export const ALERT_ERROR = 'ALERT_ERROR'
export const ALERT_WARNING = 'ALERT_WARNING'
export const ALERT_CLEAR = 'ALERT_CLEAR'

/**
 * Action Creators
 */

export const alertSuccessAction = message => ({
  type: ALERT_SUCCESS,
  payload: { message },
})

export const alertErrorAction = message => ({
  type: ALERT_ERROR,
  payload: { message },
})

export const alertWarningAction = message => ({
  type: ALERT_WARNING,
  payload: { message },
})

export const alertClearAction = () => ({
  type: ALERT_CLEAR,
})
