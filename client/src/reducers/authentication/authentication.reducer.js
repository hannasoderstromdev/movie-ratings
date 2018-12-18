import { LOGIN_REQUEST, LOGIN_SUCCESS, LOGIN_FAILURE, LOGOUT } from '../../actions/authentication/authentication.actions'

const user = JSON.parse(localStorage.getItem('user'))

const initialState = user ? { loggedIn: true, user } : {}

export default (state = initialState, action) => {
  switch (action.type) {
    case LOGIN_REQUEST:
      return { 
        loggingIn: true,
        user: action.user
      }

    case LOGIN_SUCCESS:
      return {
        loggedIn: true,
        user: action.user
      }
    
    case LOGIN_FAILURE:
      return {}

    case LOGOUT:
      return {}
  
    default:
      return state
  }
}
