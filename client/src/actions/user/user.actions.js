import userTypes from './user.types'

const loginRequest = () => ({
  type: userTypes.LOGIN_REQUEST,
})

const loginSuccess = user => ({
  type: userTypes.LOGIN_SUCCESS,
  payload: { user },
})

const loginFailure = () => ({
  type: userTypes.LOGIN_FAILURE,
})

const logoutUser = () => ({
  type: userTypes.LOGOUT,
})

const userActions = {
  loginRequest,
  loginSuccess,
  loginFailure,
  logoutUser,
}

export default userActions
