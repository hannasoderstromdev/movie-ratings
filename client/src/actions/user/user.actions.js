import userService from 'services/user/user.service'
import { setErrorAction } from 'actions/errorHandler/errorHandler.actions'
/**
 * Action Constants
 */

export const LOGIN_REQUEST = 'LOGIN_REQUEST'
export const LOGIN_SUCCESS = 'LOGIN_SUCCESS'
export const LOGIN_FAILURE = 'LOGIN_FAILURE'
export const LOGOUT = 'LOGOUT'

/**
 * Action Creators
 */

export const loginRequestAction = () => ({
  type: LOGIN_REQUEST,
})

export const loginSuccessAction = user => ({
  type: LOGIN_SUCCESS,
  payload: { user },
})

export const loginFailureAction = () => ({
  type: LOGIN_FAILURE,
})

export const logoutUserAction = () => ({
  type: LOGOUT,
})

/**
 *  Thunks
 */

export const login = (username, password) => async dispatch => {
  dispatch(loginRequestAction({ username }))

  try {
    const user = await userService.login(username, password)
    dispatch(loginSuccessAction(user))
    dispatch(
      setErrorAction({
        type: 'success',
        status: 200,
        message: 'Logged in',
      }),
    )
  } catch (error) {
    dispatch(loginFailureAction(true))
    dispatch(
      setErrorAction({
        type: 'danger',
        status: error.status,
        message: error.message,
      }),
    )
  }
}

export const logout = () => async dispatch => {
  userService.logout()
  dispatch(logoutUserAction())
}
