import {
  LOGIN_REQUEST,
  LOGIN_SUCCESS,
  LOGIN_FAILURE,
  LOGOUT,
} from 'actions/user/user.actions'

const user = JSON.parse(localStorage.getItem('user'))

const initialState = user
  ? {
      loggingIn: false,
      loggedIn: true,
      profile: user,
      error: false,
    }
  : {
      loggingIn: false,
      loggedIn: false,
      profile: null,
      error: false,
    }

export default (state = initialState, action) => {
  switch (action.type) {
    case LOGIN_REQUEST:
      return {
        ...initialState,
        loggingIn: true,
      }

    case LOGIN_SUCCESS:
      return {
        ...initialState,
        loggingIn: false,
        loggedIn: true,
        profile: action.payload.user,
      }

    case LOGIN_FAILURE:
      return {
        ...initialState,
        error: true,
      }

    case LOGOUT:
      return initialState

    default:
      return state
  }
}
