export const SET_ERROR = 'SET_ERROR'
export const CLEAR_ERROR = 'CLEAR_ERROR'

export const setError = ({ errorType, errorMessage }) => ({
  type: SET_ERROR,
  payload: { errorType, errorMessage },
})

export const clearError = () => ({
  type: CLEAR_ERROR,
})
