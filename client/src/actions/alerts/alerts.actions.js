
export const ALERT_SUCCESS = 'ALERT_SUCCESS'
export const ALERT_ERROR = 'ALERT_ERROR'
export const ALERT_CLEAR = 'ALERT_CLEAR'

export const success = ({ message }) => ({
  type: ALERT_SUCCESS,
  payload: { message }
})

export const error = ({ message }) => ({
  type: ALERT_ERROR,
  payload: { message }
})

export const clear = () => ({
  type: ALERT_CLEAR,
})
