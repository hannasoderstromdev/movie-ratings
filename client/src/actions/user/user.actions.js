import userService from 'services/user/user.service'

import { alertErrorAction, alertSuccessAction } from '../alerts/alerts.actions'

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

const loginRequestAction = user => ({
  type: LOGIN_REQUEST,
  payload: { user },
})

const loginSuccessAction = user => ({
  type: LOGIN_SUCCESS,
  payload: { user },
})

const loginFailureAction = error => ({
  type: LOGIN_FAILURE,
  payload: { error },
})

const logoutUserAction = () => ({
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
    dispatch(alertSuccessAction('Logged in!'))
  } catch (error) {
    console.log('error', error.message)
    dispatch(loginFailureAction(error))
    dispatch(alertErrorAction(error.message))
  }
}

export const logout = () => async dispatch => {
  userService.logout()
  dispatch(logoutUserAction())
}
