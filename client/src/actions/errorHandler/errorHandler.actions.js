export const SET_ERROR = 'SET_ERROR'
export const CLEAR_ERROR = 'CLEAR_ERROR'

export const setErrorAction = ({ status, type, message }) => ({
  type: SET_ERROR,
  payload: { status, type, message },
})

export const clearErrorAction = () => ({
  type: CLEAR_ERROR,
})
