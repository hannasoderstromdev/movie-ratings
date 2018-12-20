import {
  ALERT_SUCCESS,
  ALERT_ERROR,
  ALERT_WARNING,
  ALERT_CLEAR,
} from '../../actions/alerts/alerts.actions'

const initialState = {
  display: false,
  type: '',
  message: '',
}

export default (state = initialState, action) => {
  switch (action.type) {
    case ALERT_SUCCESS:
      return { display: true, type: 'success', message: action.payload.message }

    case ALERT_ERROR:
      return { display: true, type: 'danger', message: action.payload.message }

    case ALERT_WARNING:
      return { display: true, type: 'alert', message: action.payload.message }

    case ALERT_CLEAR:
      return initialState

    default:
      return state
  }
}
