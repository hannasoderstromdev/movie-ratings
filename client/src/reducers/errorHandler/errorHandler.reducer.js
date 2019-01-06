import errorHandlerTypes from 'actions/errorHandler/errorHandler.types'

const initialState = {
  error: false,
  type: null,
  message: '',
  status: 0,
}

export default (state = initialState, action) => {
  switch (action.type) {
    case errorHandlerTypes.SET_ERROR:
      return {
        error: true,
        type: action.payload.type,
        message: action.payload.message,
        status: action.payload.status,
      }

    case errorHandlerTypes.CLEAR_ERROR:
      return initialState

    default:
      return state
  }
}
