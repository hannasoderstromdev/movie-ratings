import userActions from './user.actions'
import userService from 'services/user/user.service'
import errorHandlerAction from 'actions/errorHandler/errorHandler.actions'

const login = (username, password) => async dispatch => {
  dispatch(userActions.loginRequest({ username }))

  try {
    const user = await userService.login(username, password)
    dispatch(userActions.loginSuccess(user))
    dispatch(
      errorHandlerAction.setError({
        type: 'success',
        status: 200,
        message: 'Logged in',
      }),
    )
  } catch (error) {
    dispatch(userActions.loginFailure(true))
    dispatch(
      errorHandlerAction.setError({
        type: 'danger',
        status: error.status,
        message: error.message,
      }),
    )
  }
}

const logout = () => async dispatch => {
  userService.logout()
  dispatch(userActions.logoutUser())
}

const userThunks = {
  login,
  logout,
}

export default userThunks
