import userSelectors from '../user.selectors'

import user from 'mockStore/user'

const state = {
  user,
}

describe('Selectors/User', () => {
  describe('getUserRole', () => {
    it('returns user role', () => {
      expect(userSelectors.getUserRole(state)).toEqual(user.profile.role)
    })
  })
})
