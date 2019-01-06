import userTypes from 'actions/user/user.types'

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
    case userTypes.LOGIN_REQUEST:
      return {
        ...initialState,
        loggingIn: true,
      }

    case userTypes.LOGIN_SUCCESS:
      return {
        ...initialState,
        loggingIn: false,
        loggedIn: true,
        profile: action.payload.user,
      }

    case userTypes.LOGIN_FAILURE:
      return {
        ...initialState,
        error: true,
      }

    case userTypes.LOGOUT:
      return initialState

    default:
      return state
  }
}
