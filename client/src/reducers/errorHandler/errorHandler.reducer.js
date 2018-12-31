import {
  SET_ERROR,
  CLEAR_ERROR,
} from 'actions/errorHandler/errorHandler.actions'

const initialState = {
  error: false,
  type: null,
  message: '',
  status: 0,
}

export default (state = initialState, action) => {
  switch (action.type) {
    case SET_ERROR:
      return {
        error: true,
        type: action.payload.type,
        message: action.payload.message,
        status: action.payload.status,
      }

    case CLEAR_ERROR:
      return initialState

    default:
      return state
  }
}
