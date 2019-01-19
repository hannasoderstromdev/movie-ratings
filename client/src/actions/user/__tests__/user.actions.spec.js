import userTypes from '../user.types'
import userActions from '../user.actions'

describe('Actions/User', () => {
  describe('loginRequest', () => {
    it(`returns ${userTypes.LOGIN_REQUEST}`, () => {
      const action = userActions.loginRequest()

      expect(action).toEqual({
        type: userTypes.LOGIN_REQUEST,
      })
    })
  })

  describe('loginSuccess', () => {
    it(`returns ${userTypes.LOGIN_SUCCESS} and correct payload`, () => {
      const user = {}
      const action = userActions.loginSuccess(user)

      expect(action).toEqual({
        payload: { user: {} },
        type: userTypes.LOGIN_SUCCESS,
      })
    })
  })

  describe('loginFailure', () => {
    it(`returns ${userTypes.LOGIN_FAILURE} and correct payload`, () => {
      const action = userActions.loginFailure()

      expect(action).toEqual({
        type: userTypes.LOGIN_FAILURE,
      })
    })
  })

  describe('logoutUserAction', () => {
    it(`returns ${userTypes.LOGOUT}`, () => {
      const action = userActions.logoutUser()

      expect(action).toEqual({
        type: userTypes.LOGOUT,
      })
    })
  })
})
