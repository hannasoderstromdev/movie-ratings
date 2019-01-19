import errorHandlerTypes from './errorHandler.types'

const setError = ({ status, type, message }) => ({
  type: errorHandlerTypes.SET_ERROR,
  payload: { status, type, message },
})

const clearError = () => ({
  type: errorHandlerTypes.CLEAR_ERROR,
})

const errorHandlerActions = {
  setError,
  clearError,
}

export default errorHandlerActions
